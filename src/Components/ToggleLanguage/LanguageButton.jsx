import React, { useContext } from 'react'
import { BsGlobe } from "react-icons/bs";
import { LanguageContext } from '../../Contexts/LanguageContext';

export default function LanguageButton() {

  const {currentLang,changeLanguage}=useContext(LanguageContext);
  console.log(currentLang)
  return (
     <div>
    <button className="btn-neutral btn btn-sm" popoverTarget="popover-2" style={{ anchorName: "--anchor-2" }}>
        <BsGlobe/>
    </button>
    
    <ul className=" dropdown-center  dropdown menu  w-30 max-h-[400px] overflow-auto flex-nowrap rounded-box bg-base-100 shadow-sm"
      popover="auto" id="popover-2" style={{ positionAnchor: "--anchor-2" } /* as React.CSSProperties */ }>
      <li key={"arabic"} className={currentLang=="ar"?" text-white rounded-md bg-neutral ":null}  onClick={()=>{changeLanguage("ar")}}> <a><p className=' font-bold text-xs'>Ar</p> <p className=''>Arabic</p></a></li>
      <li key={"english"} className={currentLang=="en"?" text-white rounded-md bg-neutral ":null}  onClick={()=>{changeLanguage("en")}}> <a><p className=' font-bold text-xs'>En</p> <p className=''>English</p></a></li>
    </ul>
    </div>
  )
}
