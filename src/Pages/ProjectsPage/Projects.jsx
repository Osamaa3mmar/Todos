import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LuGrid2X2 } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

export default function Projects() {
  const {t}=useTranslation();
  const [type,setType]=useState("col");
  return (
    <div>

      {/* top section */ }
      <div className=" flex items-center justify-between">
      <h2 className=' text-4xl font-bold'>{t("projects")}</h2>
      <div className="flex items-center   justify-between gap-3 p-2 rounded-sm">
        <div
        onClick={()=>{
          setType("grid")
        }}
        className={`${type=="grid"?"btn-primary":"btn-dash"} btn md:btn-md   hover:btn-primary`}>
      <LuGrid2X2/>
      </div>
        <div
        onClick={()=>{
          setType("col")
        }}
        className={`${type=="col"?"btn-primary":"btn-dash"} btn md:btn-md   hover:btn-primary`}>
      <IoMenu/>
      </div>
      </div>
      </div>
    </div>
  )
}
