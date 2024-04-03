import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Dashboard } from "@/pages";
import { RouteObject } from "react-router-dom";

const DashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
];

export default DashboardRoutes;
