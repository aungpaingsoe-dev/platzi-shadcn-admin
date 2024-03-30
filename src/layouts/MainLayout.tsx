import React from "react";
import { Outlet } from "react-router-dom";
import { AuthGuardComponent, HeaderComponent } from "@/components";

const MainLayout: React.FC = () => {
  return (
    <AuthGuardComponent>
      <HeaderComponent />
      <div className="contact">
        <Outlet />
      </div>
    </AuthGuardComponent>
  );
};

export default MainLayout;
