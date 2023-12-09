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
    
    <div className="ml-16 d-flex justify-content-end"> 
            
  {
    theme === 'dark' ? 
      (<div
      className=" cursor-pointer"
       onClick={() => setTheme('light')}>Light Mode</div>  ):
       (<div
        className=" cursor-pointer"
         onClick={() => setTheme('dark')}>Dark Mode</div>  )
  }
  </div>
  )
};