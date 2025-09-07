import { TiFlowSwitch } from "react-icons/ti";
import {motion} from "motion/react"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

export default function ProjectHCard() {
  const {currentLang}=useContext(LanguageContext);
  return (
    <motion.div initial={{scale:0.8}}
    whileInView={{scale:1}}
    transition={{duration:0.3}}
    whileHover={{scale:1.02,rotate:0.3}} className="group hover:outline-dashed flex shadow outline-3 outline-primary items-start gap-4  justify-start bg-primary/3 py-4 px-6 rounded-md mt-6">
      
      <div className=" p-2 rounded-lg flex bg-primary group-hover:rotate-90 duration-300">
        <TiFlowSwitch className=" text-primary-content" size={50}/>
      </div>
      <div className=" ">
        <p className=" text-2xl font-bold">Project Name</p>
        <p className=" text-xs mt-2 text-base-content">2025/9/7 At 10:39 Am</p>
        <div className=" mt-3 flex items-center gap-2">
           <motion.div whileHover={{rotate:5,scale:1.05}} className="badge badge-primary  text-primary border-none bg-primary/10  badge-md rounded-md hover:cursor-pointer ">
            osama
          </motion.div>
           <motion.div whileHover={{rotate:5,scale:1.05}} className="badge badge-primary  text-primary border-none bg-primary/10  badge-md rounded-md hover:cursor-pointer ">
            osama
          </motion.div>
           <motion.div whileHover={{rotate:5,scale:1.05}} className="badge badge-primary  text-primary border-none bg-primary/10  badge-md rounded-md hover:cursor-pointer ">
            osama
          </motion.div>
           <div className="btn btn-sm  btn-ghost">
            <p>

            More
            </p>
            {/* <HiOutlineDotsHorizontal size={18}/> */}
            <div className="badge badge-xs badge-primary">+99</div>
           </div>
        </div>
      </div>
      <div className="ms-auto hidden group-hover:flex btn btn-lg btn-soft duration-300 items-center  self-center justify-end">
        {
          currentLang=="ar"?
          <IoMdArrowRoundBack size={30}/>
          
          :

          <IoMdArrowRoundForward size={30}/>

        }
      </div>
    </motion.div>
  )
}
