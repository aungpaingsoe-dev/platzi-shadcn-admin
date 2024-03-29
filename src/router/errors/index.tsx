import { NotFoundPage } from "@/pages";
import { RouteObject } from "react-router";

const ErrorRoutes: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default ErrorRoutes;
