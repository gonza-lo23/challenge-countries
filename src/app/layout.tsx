
'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
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
    <header className="bg-white dark:bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <Link 
        href="/" 
        className=
        "dark:text-white
         dark:hover:text-green-300 
         text-2xl font-semibold
          text-indigo-600">Where in the world ?</Link>
          <nav>
          <ul className="flex space-x-6">
            <li>
            <a 
             href="#" 
             className="
             dark:text-white
             dark:hover:text-green-300
             text-gray-700
             hover:text-indigo-600">{ThemeSwitcher}</a>
             </li>
          </ul>
        </nav>
      </div>
    </header>
        {children}
        </div>
        </body>
      </html>
  )
}
