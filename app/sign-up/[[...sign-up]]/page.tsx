import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Crear cuenta SmarterBot
        </h1>
        <p className="text-gray-600">
          Únete al ecosistema SmarterOS
        </p>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl w-full max-w-[400px]">
        <SignUp
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
          path="/sign-up"
        />
      </div>
    </main>
  )
}
