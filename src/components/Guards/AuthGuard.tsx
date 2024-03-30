import React from "react";
import { Navigate } from "react-router";

interface Props {
  children: React.ReactNode;
}

const AuthGuardComponent: React.FC<Props> = ({ children }) => {
  const isauth = true;
  if (!isauth) {
    return <Navigate to={"/auth/sign-in"} />;
  } else {
    return <div>{children}</div>;
  }
};

export default AuthGuardComponent;
