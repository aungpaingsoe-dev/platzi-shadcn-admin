import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Home } from "@/pages";
import { RouteObject } from "react-router-dom";

const HomeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

export default HomeRoutes;
