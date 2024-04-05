import React from "react";
import { Card } from "@/components/ui/card";
import { SiPlatzi } from "react-icons/si";
import menusList from "@/services/data/menus";
import { useLocation } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

const IconSidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Card className=" z-[2000] w-14 h-screen fixed top-0 start-0 flex justify-center overflow-y-auto rounded-none shadow-none border-top-none ">
      <div className=" flex flex-col items-center ">
        <div className=" border-b py-5 w-full top-0 sticky ">
          <div className=" px-4 flex items-center gap-2 text-lg ">
            <SiPlatzi />
          </div>
        </div>

        {menusList?.map((menu: any, index) => (
          <React.Fragment key={index}>
            {menu.children ? (
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger
                      asChild
                      className=" focus-visible:outline-none "
                    >
                      <div
                        className={
                          "nav-link hover:nav-active w-full " +
                          (pathname === menu.link && "nav-active")
                        }
                      >
                        {menu.icon && menu.icon}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="right"
                      className="w-[200px] z-[2500] "
                    >
                      <DropdownMenuLabel>{menu.title}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {menu?.children.map((child: any) => (
                          <Link to={child.link}>
                            <DropdownMenuItem className=" cursor-pointer z-[3000] ">
                              {child.title}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent className=" sticky z-50 " side="right">
                  {menu.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link
                    className={
                      "nav-link hover:nav-active " +
                      (pathname == menu.link && "nav-active")
                    }
                    to={menu.link}
                  >
                    {menu.icon && menu.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className=" sticky z-50 " side="right">
                  {menu.title}
                </TooltipContent>
              </Tooltip>
            )}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default IconSidebar;
