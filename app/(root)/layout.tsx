import Header from '@/components/views/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/views/Footer'
import AppProvider from '@/providers/AppProvider'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vidbucks-live streaming platform',
  description: 'Watch, stream and connect with people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
