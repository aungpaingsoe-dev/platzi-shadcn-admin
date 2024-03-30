import React from "react";
import { useRouteError, isRouteErrorResponse, Navigate } from "react-router";

const ErrorBoundaryComponent: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Navigate to={"/404"}/>;
    }

    if (error.status === 401) {
      return <Navigate to={"/auth/login"} />;
    }

    if (error.status === 500) {
      return <Navigate to={"/500"}/>
    }
  }

  return <Navigate to={"/error"}/>
};

export default ErrorBoundaryComponent;
