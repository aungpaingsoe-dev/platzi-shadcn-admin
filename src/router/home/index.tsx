import { ErrorBoundaryComponent } from "@/components";
import { MainLayout } from "@/layouts";
import { HomePage } from "@/pages";
import { RouteObject } from "react-router-dom";

const HomeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundaryComponent />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];

export default HomeRoutes;
