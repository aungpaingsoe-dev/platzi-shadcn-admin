import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";
import ContactRoutes from "./contact";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...ContactRoutes
]);

export default router;
