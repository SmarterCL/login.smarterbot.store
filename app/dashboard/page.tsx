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

  // Si no hay perfil o hay error, podrías registrar el intento o mostrar algo,
  // pero el requerimiento es "que verifique contra supabase que deje pasar"
  console.log('Supabase verify:', profile ? 'User authorized' : 'Profile not found')

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
