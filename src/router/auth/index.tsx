import { RouteObject } from "react-router-dom";
import { SignInPage, SignUpPage } from "@/pages";
import { AuthLayout } from "@/layouts";

const AuthRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
];

export default AuthRoutes;
