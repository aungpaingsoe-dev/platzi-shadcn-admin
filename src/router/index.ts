import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";
import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "@/router/dashboard";
import SettingRoutes from "./settings";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...SettingRoutes,
  ...ErrorRoutes,
]);

export default router;
