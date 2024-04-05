import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Users } from "@/pages";
import { RouteObject } from "react-router-dom";

const UserRoutes: RouteObject[] = [
  {
    path: "/users",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Users />,
      },
    ],
  },
];

export default UserRoutes;
