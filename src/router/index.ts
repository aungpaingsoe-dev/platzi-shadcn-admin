import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";
import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "@/router/dashboard";
import SettingRoutes from "@/router/settings";
import CategoryRoutes from "@/router/categories";
import ProductRoutes from "./products";
import UserRoutes from "./users";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...CategoryRoutes,
  ...ProductRoutes,
  ...UserRoutes,
  ...SettingRoutes,
  ...ErrorRoutes,
]);

export default router;
