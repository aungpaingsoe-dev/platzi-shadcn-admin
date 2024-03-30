import {
  ErrorPage,
  NetworkErrorPage,
  NotFoundPage,
  ServerErrorPage,
} from "@/pages";
import { RouteObject } from "react-router";

const ErrorRoutes: RouteObject[] = [
  {
    path: "error",
    element: <ErrorPage />,
  },
  {
    path: "404",
    element: <NotFoundPage />,
  },
  {
    path: "500",
    element: <ServerErrorPage />,
  },
  {
    path: "network-error",
    element: <NetworkErrorPage />,
  },
];

export default ErrorRoutes;
