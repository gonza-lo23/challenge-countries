"use client";
import { useEffect, useState } from "react";
import {useTheme} from "next-themes";
import Link from "next/link";

export function DarkMode() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return null;
  } 

  return (
    
    <div>         
  {
    theme === 'dark' ? 
      (<div
       className="text-white cursor-pointer"
       onClick={() => setTheme('light')}>
        <Link 
        href={'dark'}
        as={'dark'}>
        Dark Mode
        </Link>
       </div>  ):
       (<div
        className="text-white cursor-pointer"
        onClick={() => setTheme('dark')}>
        <Link 
        href={'light'}
        as={'light'}>
        Light Mode
        </Link>
        </div>  )
  }
  </div>
  )
};