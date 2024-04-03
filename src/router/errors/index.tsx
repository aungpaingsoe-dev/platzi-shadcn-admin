import { GeneralError, NetworkError, PageNotFoundError } from "@/components";
import { RouteObject } from "react-router-dom";

const ErrorRoutes: RouteObject[] = [
  {
    path: "404",
    element: <PageNotFoundError />,
  },
  {
    path: "error",
    element: <GeneralError />,
  },
  {
    path: "network-error",
    element: <NetworkError />,
  },
];

export default ErrorRoutes;
