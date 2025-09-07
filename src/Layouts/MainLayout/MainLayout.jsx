import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className=" h-screen ">
      <Navbar />
      <div className="     mt-[100px] w-[90%] md:w-[90%] m-auto xs:w-[94%]">
      <Outlet />
      </div>
    </div>
  );
}
