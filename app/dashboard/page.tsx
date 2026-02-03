import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  // Verificar autonomía contra Supabase
  const email = user.emailAddresses[0].emailAddress
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', email)
    .single()

  const isAuthorized = !!profile

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border-t-8 border-red-500">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Acceso no autorizado</h1>
          <p className="text-gray-600 mb-8">
            Tu cuenta ({email}) no está vinculada a una suscripción activa de SmarterOS.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:soporte@smarterbot.cl"
              className="block w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-red-200"
            >
              Contactar Soporte
            </a>
            <div className="flex items-center justify-center pt-2">
              <UserButton afterSignOutUrl="/" />
              <span className="ml-2 text-sm text-gray-500 font-medium">Cerrar Sesión</span>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Hola, {user.firstName || user.emailAddresses[0].emailAddress}! 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Bienvenido a tu portal SmarterOS
              </p>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <a
              href="https://crm.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all border-2 border-blue-200 hover:border-blue-400 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">CRM</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900">Clientes</h3>
              <p className="text-blue-700 text-sm mt-1 text-center">Gestión integral</p>
            </a>

            <a
              href="https://erp.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-2xl hover:bg-green-100 transition-all border-2 border-green-200 hover:border-green-400 group"
            >
              <div className="w-16 h-16 bg-green-600 rounded-xl mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">ERP</span>
              </div>
              <h3 className="text-xl font-bold text-green-900">Negocio</h3>
              <p className="text-green-700 text-sm mt-1 text-center">Administración</p>
            </a>

            <a
              href="https://kpi.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all border-2 border-purple-200 hover:border-purple-400 group"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-xl mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">KPI</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900">Métricas</h3>
              <p className="text-purple-700 text-sm mt-1 text-center">Análisis datos</p>
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://n8n.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Acceder a automatizaciones (n8n)
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
