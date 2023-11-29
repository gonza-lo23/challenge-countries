
'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import {Providers} from "./providers.jsx";
import {ThemeSwitcher} from './components/ThemeSwitcher.jsx';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return ( 
      <html lang="en" className="dark">
      <body className={inter.className}>
      <div className="bg-gray-100 dark:bg-black w-screen h-screen">
    <header className="grid grid-cols-2 w-auto h-16 bg-white dark:bg-black p-4 shadow-lg ">
      <div className="col-start-1  col-end-2 mx-auto justify-between items-center ">
        <Link 
        href="/" 
        className="dark:text-white
         dark:hover:text-green-300 
         text-2xl font-semibold
          text-indigo-600">Where in the world ?</Link>    
        </div>
        <div className="text-white grid col-start-2 col-end-2 px-16">
          hol
           {ThemeSwitcher}
          </div>
    </header>
    <Providers>
      <ThemeSwitcher/>
        {children}
        </Providers>
        </div>
        </body>
      </html>
  )
}
