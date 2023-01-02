import './globals.css'
import { Montserrat } from '@next/font/google'
import Nav from './Nav'
import Footer from './Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <Nav />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
