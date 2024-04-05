import { ErrorBoundary } from "@/components";
import { MainLayout } from "@/layouts";
import { Products } from "@/pages";
import { RouteObject } from "react-router-dom";

const ProductRoutes: RouteObject[] = [
  {
    path: "/products",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Products />,
      },
    ],
  },
];

export default ProductRoutes;
