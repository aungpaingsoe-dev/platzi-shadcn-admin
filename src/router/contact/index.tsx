import { RouteObject } from "react-router-dom";
import { ContactPage } from "@/pages";
import { MainLayout } from "@/layouts";

const ContactRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];

export default ContactRoutes;
