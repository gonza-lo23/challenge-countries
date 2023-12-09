
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import {DarkMode} from './components/DarkMode';
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
      <div className="bg-gray-100 dark:bg-gray-900 w-screen h-screen ">
    <header className="grid grid-cols-2 w-auto h-16 bg-white dark:bg-gray-950 p-4 shadow-lg ">
      <div className="-ml-0.5 pl-32 col-start-1 grid-flow-col  col-end-1 mx-auto ">
        <Link 
        href="/" 
        className="
        dark:text-white
        dark:hover:text-gray-300 
          text-2xl font-semibold
        text-black ">Where in the world ?
        </Link>          
        </div>
        <div className=' text-white grid col-start-2 '>
          <DarkMode/>
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
