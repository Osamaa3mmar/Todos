import { useContext } from "react"
import ThemeContext from "../../Contexts/ThemeContext"
import { TbColorFilter } from "react-icons/tb";

export default function ToggleTheme() {
    const {changeTheme,themes,currentTheme}=useContext(ThemeContext);


  return (
  <div>
<button className="btn-primary btn btn-sm" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
    <TbColorFilter size={20}/>
</button>

<ul className=" dropdown-center  dropdown menu  w-40 max-h-[400px] overflow-auto flex-nowrap rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  {themes?.map((theme,index)=>{
        return <li  key={index} className={currentTheme==theme?" text-white rounded-md bg-primary":null}  onClick={()=>{changeTheme(theme)}}>
          <a>{theme}</a></li>
    })}
</ul>
</div>
  )
}
