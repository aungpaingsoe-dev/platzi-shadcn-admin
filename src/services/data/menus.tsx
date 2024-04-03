import {
  InfoCircle,
  Error404,
  BarrierBlock,
  ServerOff,
  Home,
  Users,
  WifiOff,
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
        title : "Lose Connection",
        link : "/network-error",
        icon : <WifiOff size={18} strokeWidth={2} />
      }
    ],
    isOpen: false,
  },
  {
    icon: <Users size={18} strokeWidth={2} />,
    title: "Form Pages",
    link: "/users",
    children: [
      {
        title: "Sign In",
        link: "/auth/sign-in",
        icon: <Error404 size={18} strokeWidth={2} />,
      },
      {
        title: "Sign Up",
        link: "/auth/sign-up",
        icon: <Error404 size={18} strokeWidth={2} />,
      },
    ],
    isOpen: false,
  },
];

export default menus;
