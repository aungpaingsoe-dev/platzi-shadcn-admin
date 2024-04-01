import { AuthGuard } from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  );
};

export default AuthLayout;
