import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "@/components";

const MainLayout: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <div className="contact">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
