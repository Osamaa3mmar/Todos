import React, { useEffect, useRef, useState } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { useTranslation } from "react-i18next";
import LanguageButton from "../ToggleLanguage/LanguageButton";
export default function Navbar() {
  const { t } = useTranslation();
  const [nav,setNav]=useState(false);
  const debounce=useRef(null);

  const handleScroll=()=>{
    if(debounce.current) return ;

    debounce.current=setTimeout(()=>{
  setNav((prev)=>{
if(window.scrollY>600&& !prev){
     return true;
    }
    if(window.scrollY<600 && prev){
      return false;
    }
    return prev
    })
    debounce.current=null;
    },100)


  
    
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
     return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  },[])


  return (
    <div className={`navbar shadow-md sticky top-0 backdrop-blur-md m-auto border-b border-primary/40 px-10 transition-all duration-600 ${nav?"w-[50%] mx-auto rounded-2xl border top-4":"w-[100%]"}`}>
      <div className="navbar-start">
        <button className="btn btn-ghost btn-lg   normal-case font-semibold tracking-wide   hover:shadow-md transition-all duration-200">
          {t("logo")}
        </button>
      </div>

      <ul className=" hidden rounded-box lg:flex dropdown menu menu-horizontal bg-transparent navbar-center gap-6">
        <li>
          <a className=" rounded-md font-medium  cursor-pointer">{t("home")}</a>
        </li>
        <li>
          <a className=" rounded-md font-medium cursor-pointer">{t("home")}</a>
        </li>
        <li>
          <a className=" rounded-md font-medium btn-sm btn btn-neutral text-white cursor-pointer">{t("home")}</a>
        </li>
      </ul>

      <div className=" hidden lg:flex navbar-end gap-3">
        <ToggleTheme />
        <LanguageButton />
      </div>
    </div>
  );
}
