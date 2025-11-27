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
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-none",
            }
          }}
          routing="path"
          path="/sign-up"
        />
      </div>
    </main>
  )
}
