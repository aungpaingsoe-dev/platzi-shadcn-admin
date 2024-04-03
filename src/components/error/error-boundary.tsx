import React from "react";
import { useRouteError, isRouteErrorResponse, Navigate } from "react-router";
import { PageNotFoundError, GeneralError } from "@/components";

const ErrorBoundaryComponent: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <PageNotFoundError/>
    }

    if (error.status === 401) {
      return <Navigate to={"/auth/sign-in"} />;
    }

    if (error.status === 500 || error.status === 503) {
      return <GeneralError/>
    }

  }

  return <GeneralError/>
};

export default ErrorBoundaryComponent;
