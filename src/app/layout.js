import { Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Tridaya Mitra Informatika',
  description: 'Tridaya Mitra Informatika',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
