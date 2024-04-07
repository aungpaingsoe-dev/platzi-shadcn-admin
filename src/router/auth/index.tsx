import { RouteObject } from "react-router-dom";
import { SignIn } from "@/pages";
import { AuthLayout } from "@/layouts";

const AuthRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      }
    ],
  },
];

export default AuthRoutes;
