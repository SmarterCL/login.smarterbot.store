import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SmarterBot - Portal de Acceso',
  description: 'Portal de autenticación SmarterBot - Acceso a CRM, ERP, KPI y más',
  keywords: 'SmarterBot, login, autenticación, CRM, ERP, KPI',
  openGraph: {
    title: 'SmarterBot - Portal de Acceso',
    description: 'Portal de autenticación SmarterBot',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
