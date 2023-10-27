import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

import Header from './components/globals/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header/>
        {/* <main className="relative flex min-h-screen mt-[82px] z-[1] flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sweden-light to-sweden-dark"> */}
        <main className="relative flex mt-[82px] max-h-[calc(100vh-82px)] overflow-hidden z-[1] flex-col items-center justify-center">
        <Providers>
          <div className='max-h-[calc(100vh-82px)] overflow-y-auto w-screen'>
            {children}
          </div>
        </Providers>
        </main>
      </body>
    </html>
  )
}
