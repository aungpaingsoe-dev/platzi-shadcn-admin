import {
  InfoCircle,
  Error404,
  ServerOff,
  Home,
  Users,
  WifiOff,
  Login,
  UserPlus,
  Shield,
  Settings2,
  Category2,
  Package,
  BuildingWarehouse,
  BrandHipchat,
  BoxOff,
  Bandage
} from "tabler-icons-react";

interface MenuItem {
  title: string;
  link?: string;
  icon?: JSX.Element;
  children?: MenuItem[];
  isOpen?: boolean; // New property to track open/closed state
}

const menus: MenuItem[] = [
  {
    icon: <Home size={18} strokeWidth={2} />,
    title: "Dashboard",
    link: "/",
    isOpen: false,
  },
  {
    icon: <Category2 size={18} strokeWidth={2} />,
    title: "Categories",
    link: "/",
    isOpen: false,
  },
  {
    icon: <Package size={18} strokeWidth={2} />,
    title: "Products",
    link: "/users",
    children: [
      {
        title: "In Stock",
        link: "/auth/sign-in",
        icon: <BuildingWarehouse size={18} strokeWidth={2} />,
      },
      {
        title: "Out Stock",
        link: "/auth/sign-in",
        icon: <BoxOff size={18} strokeWidth={2} />,
      },
      {
        title: "Damages",
        link: "/auth/sign-in",
        icon: <Bandage size={18} strokeWidth={2} />,
      },
    ],
    isOpen: false,
  },
  {
    icon: <BrandHipchat size={18} strokeWidth={2} />,
    title: "Chats",
    link: "/",
    isOpen: false,
  },
  {
    icon: <InfoCircle size={20} strokeWidth={2} />,
    title: "Error Pages",
    children: [
      {
        title: "404 Not Found",
        link: "/404",
        icon: <Error404 size={18} strokeWidth={2} />,
      },
      {
        title: "General Error",
        link: "/error",
        icon: <ServerOff size={18} strokeWidth={2} />,
      },
      {
        title: "Lose Connection",
        link: "/network-error",
        icon: <WifiOff size={18} strokeWidth={2} />,
      },
    ],
    isOpen: false,
  },
  {
    icon: <Shield size={18} strokeWidth={2} />,
    title: "Auth Pages",
    link: "/users",
    children: [
      {
        title: "Sign In",
        link: "/auth/sign-in",
        icon: <Login size={18} strokeWidth={2} />,
      },
      {
        title: "Sign Up",
        link: "/auth/sign-up",
        icon: <UserPlus size={18} strokeWidth={2} />,
      },
    ],
    isOpen: false,
  },
  {
    icon: <Users size={18} strokeWidth={2} />,
    title: "Users",
    link: "/users",
    isOpen: false,
  },
  {
    icon: <Settings2 size={18} strokeWidth={2} />,
    title: "Settings",
    link: "/settings",
    isOpen: false,
  },
];

export default menus;
