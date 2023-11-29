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
    <div className=" 
">
  <button 
    className="
    text-white
    "
    onClick={() => setTheme('light')}>Dark Mode</button>
    
  <button
    className="text-white"
     onClick={() => setTheme('dark')}>Light Mode</button>           
  

</div>
  )
};