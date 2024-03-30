import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";
import ContactRoutes from "./contact";
import ErrorRoutes from "@/router/errors";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...ContactRoutes,
  ...ErrorRoutes,
]);

export default router;
