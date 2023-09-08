import './globals.css'
import type { Metadata } from 'next'
import { LoginLayout } from '@/components'



export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <LoginLayout>
        {children}
        </LoginLayout>      
      </body>
    </html>
  )
}
