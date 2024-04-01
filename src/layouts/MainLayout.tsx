import React from "react";
import { Outlet } from "react-router-dom";
import { AuthGuard, Header } from "@/components";

const MainLayout: React.FC = () => {
  return (
    <AuthGuard>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
