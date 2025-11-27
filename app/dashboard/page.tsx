import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const user = await currentUser()
  
  if (!user) {
    redirect('/sign-in')
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <a
              href="https://crm.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border-2 border-blue-200 hover:border-blue-400"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">CRM</h3>
              <p className="text-blue-700 text-sm">Gestión de clientes</p>
            </a>

            <a
              href="https://erp.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border-2 border-green-200 hover:border-green-400"
            >
              <h3 className="text-xl font-bold text-green-900 mb-2">ERP</h3>
              <p className="text-green-700 text-sm">Recursos empresariales</p>
            </a>

            <a
              href="https://kpi.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border-2 border-purple-200 hover:border-purple-400"
            >
              <h3 className="text-xl font-bold text-purple-900 mb-2">KPI</h3>
              <p className="text-purple-700 text-sm">Métricas y análisis</p>
            </a>

            <a
              href="https://n8n.smarterbot.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors border-2 border-orange-200 hover:border-orange-400"
            >
              <h3 className="text-xl font-bold text-orange-900 mb-2">Automatización</h3>
              <p className="text-orange-700 text-sm">Workflows n8n</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
