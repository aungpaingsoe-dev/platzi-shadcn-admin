import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Categories } from "@/pages";
import { RouteObject } from "react-router-dom";

const CategoryRoutes: RouteObject[] = [
  {
    path: "/categories",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Categories />,
      },
    ],
  },
];

export default CategoryRoutes;
