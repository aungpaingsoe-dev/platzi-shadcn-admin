import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "@/router/auth";
import HomeRoutes from "@/router/home";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
]);

export default router;
