import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";
import ErrorRoutes from "@/router/errors";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...ErrorRoutes
]);

export default router;
