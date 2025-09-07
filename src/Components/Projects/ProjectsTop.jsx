import React from "react";
import { useTranslation } from "react-i18next";
import { LuGrid2X2 } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import {motion} from "motion/react"
export default function ProjectsTop({type,setType}) {
    const { t } = useTranslation();
  return (
    <>
      <div className=" flex items-center justify-between">
        <motion.h2 initial={{opacity:0,y:40}} transition={{duration:0.4}} whileInView={{opacity:1,y:0}}  className=" text-4xl font-bold">{t("your projects")}</motion.h2>
        <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.4}}  className="flex items-center   justify-between gap-3 p-2 rounded-sm">
          <motion.div
          whileHover={{scale:1.06,rotate:-10}}
          whileTap={{scale:0.9}}
            onClick={() => {
              setType("grid");
            }}
            className={`${
              type == "grid" ? "btn-primary" : "btn-dash"
            } btn md:btn-md   hover:btn-primary`}
          >
            <LuGrid2X2 size={22} />
          </motion.div>
          <motion.div
          whileHover={{scale:1.06,rotate:10}}
          whileTap={{scale:0.9}}
            onClick={() => {
              setType("col");
            }}
            className={`${
              type == "col" ? "btn-primary" : "btn-dash"
            } btn md:btn-md   hover:btn-primary`}
          >
            <IoMenu size={22} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.4}}  className="divider divider-primary"></motion.div>
      </>
  )
}
