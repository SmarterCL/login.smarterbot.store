import { SignIn } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Bienvenido a SmarterBot
        </h1>
        <p className="text-gray-600">
          Portal de acceso a servicios SmarterOS
        </p>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl w-full max-w-[400px]">
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "shadow-none w-full",
              headerTitle: "text-2xl font-bold text-center",
              headerSubtitle: "text-center text-gray-600",
              socialButtonsBlockButton: "w-full min-h-[48px] sm:min-h-[52px] bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-base",
              formButtonPrimary: "w-full min-h-[48px] sm:min-h-[52px] bg-blue-600 hover:bg-blue-700 transition-colors text-base font-semibold",
              footerActionLink: "text-blue-600 hover:text-blue-700",
              formFieldInput: "min-h-[48px] sm:min-h-[52px] text-base",
            }
          }}
          routing="path"
          path="/sign-in"
          redirectUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>¿Necesitas ayuda? Contacta al equipo de soporte</p>
        <div className="mt-4 flex gap-4 justify-center text-xs">
          <a href="https://crm.smarterbot.cl" className="text-blue-600 hover:underline">
            CRM
          </a>
          <a href="https://erp.smarterbot.cl" className="text-blue-600 hover:underline">
            ERP
          </a>
          <a href="https://kpi.smarterbot.cl" className="text-blue-600 hover:underline">
            KPI
          </a>
          <a href="https://n8n.smarterbot.cl" className="text-blue-600 hover:underline">
            Automatización
          </a>
        </div>
      </div>
    </main>
  )
}
