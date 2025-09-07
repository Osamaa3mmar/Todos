import { useState } from "react";
import ProjectsTop from "../../Components/Projects/ProjectsTop";
import ProjectHCard from "../../Components/Projects/ProjectHCard";
export default function Projects() {
  const [type, setType] = useState("col");
  return (
    <div >
      {/* top section */}
      <ProjectsTop type={type} setType={setType}/>
      <div className="flex flex-col pb-12 ">


      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      <ProjectHCard/>
      </div>
    </div>
  );
}
