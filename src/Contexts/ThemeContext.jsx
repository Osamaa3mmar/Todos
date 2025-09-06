import { createContext, useEffect, useState } from "react";



export const ThemeContext=createContext();


export const ThemeContextProvidor=({children})=>{
    
        //هذا فكرتو انو يغير الثيم لكل اشي لا تستخدمو في فنكشنات ثانية بتستخدمو 
        const setBodyTheme=(theme)=>{
            document.documentElement.setAttribute("data-theme",theme);
            
        }
        //هذا السطر بيجيبلك اذا المستخدم دخل اول مرة للموقع هل هو باي ديفولت اسود او لا 
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [current,setCurrent]=useState(prefersDark?"dark":"light");
    const changeTheme=(theme)=>{
    setCurrent(theme);
    setBodyTheme(theme);
    localStorage.setItem("theme",theme);
   }
    const getThemeFromLocalStorage=()=>{
        const theme=localStorage.getItem("theme");
        //هون اذا كان داخل اول مره هيكون الوكال ستوريج فاضية ف رح ناخذ من المفضله تبعت اليوزر 
        changeTheme(theme?theme:prefersDark?"dark":"light");
    }

    const themes = [
  "light",
  "dark",
  "silk"
];


    useEffect(()=>{
        getThemeFromLocalStorage();
    },[])
    return <ThemeContext.Provider  value={{currentTheme:current,changeTheme,themes}}>
        {children}
    </ThemeContext.Provider>
}


export default ThemeContext;