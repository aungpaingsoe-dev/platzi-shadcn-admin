import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { Apple } from 'tabler-icons-react';
import { LayoutDashboard } from 'tabler-icons-react';
import { Users } from 'tabler-icons-react';
import { useSelector } from "react-redux";

const SideBar: React.FC = () => {
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  return (
    <>
      { !isOpen && 
      <Card className=" w-14 h-screen fixed top-0 start-0 flex justify-center overflow-y-auto rounded-none shadow-none border-top-none ">
        <div className=" flex flex-col items-center ">
          <div className=" border-b py-5 w-full ">
            <div className=" px-4 flex items-center gap-2 text-lg ">
              <Apple size={20} strokeWidth={3} />
            </div>
          </div>
          <TooltipProvider delayDuration={0}>
            <div className=" nav-link nav-active ">
              <Tooltip>
                <TooltipTrigger>
                  <LayoutDashboard size={18} strokeWidth={2} />
                </TooltipTrigger>
                <TooltipContent side="right" className="ms-3 flex items-center">
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </div>
            <div className=" nav-link nav-active ">
              <Tooltip>
                <TooltipTrigger>
                  <Users size={18} strokeWidth={2} />
                </TooltipTrigger>
                <TooltipContent side="right" className="ms-3 flex items-center">
                  Users
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </Card>
      }
    </>
  );
};

export default SideBar;
