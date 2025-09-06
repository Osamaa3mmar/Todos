import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className=" h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
