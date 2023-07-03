import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Library',
  description: 'A small app to store all of my favourite books!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body classNameName={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
