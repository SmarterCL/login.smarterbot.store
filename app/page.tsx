import { SignIn } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900 text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-lg">
          <h1 className="text-5xl font-bold mb-6">SmarterBot</h1>
          <p className="text-xl text-blue-100 mb-8">
            Tu sistema operativo empresarial inteligente.
            Accede a CRM, ERP y métricas en un solo lugar.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm opacity-80">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <span className="block font-bold text-lg mb-1">CRM</span>
              Gestión de clientes
            </div>
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <span className="block font-bold text-lg mb-1">ERP</span>
              Recursos y Finanzas
            </div>
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <span className="block font-bold text-lg mb-1">KPI</span>
              Métricas en tiempo real
            </div>
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <span className="block font-bold text-lg mb-1">Auto</span>
              Automatización n8n
            </div>
          </div>
        </div>

        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col items-center justify-center p-8 sm:p-24 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:hidden">
            <h2 className="text-3xl font-bold text-gray-900">SmarterBot</h2>
            <p className="mt-2 text-gray-600">Portal de Acceso</p>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl w-full">
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

          <p className="text-center text-sm text-gray-500">
            ¿Necesitas ayuda? <a href="mailto:soporte@smarterbot.cl" className="text-blue-600 hover:underline">Contactar soporte</a>
          </p>
        </div>
      </div>
    </main>
  )
}
