import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Bienvenido a SmarterBot
        </h1>
        <p className="text-gray-600">
          Ingresa a tu cuenta SmarterOS
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-none",
            }
          }}
          routing="path"
          path="/sign-in"
        />
      </div>
    </main>
  )
}
