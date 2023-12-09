"use client";
import { useEffect, useState } from "react";
import {useTheme} from "next-themes";

export function ThemeSwitcher() {
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
       onClick={() => setTheme('light')}></div>  ):
       (<div
         onClick={() => setTheme('dark')}></div>  )
  }
  </div>
  )
};