import { AuthGuardComponent } from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <AuthGuardComponent>
      <Outlet />
    </AuthGuardComponent>
  );
};

export default AuthLayout;
