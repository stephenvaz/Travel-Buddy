import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { ToastContainer } from 'react-toastify';
import NavB from './auth/components/navB';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel Buddy',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavB />
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  )
}
