
import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Settings } from "@/pages";
import { RouteObject } from "react-router-dom";

const SettingRoutes: RouteObject[] = [
  {
    path: "/settings",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Settings />,
      },
    ],
  },
];

export default SettingRoutes;
