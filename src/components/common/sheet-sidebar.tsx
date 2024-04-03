import React, { useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sidebar-sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { Apple } from "tabler-icons-react";
import { LayoutDashboard } from "tabler-icons-react";
import { Users } from "tabler-icons-react";

interface SheetSideBarProps {
  isOpen: boolean;
}

const SheetSideBar: React.FC<SheetSideBarProps> = ({ isOpen }) => {
  useEffect(() => {
    // Function to check and remove pointer-events style if it's set to 'none'
    const checkAndRemovePointerEvents = () => {
      const bodyElement = document.body;
      const bodyStyles = window.getComputedStyle(bodyElement);
      const currentPointerEvents = bodyStyles.pointerEvents;

      // Check if pointer-events is set to 'none' and remove it
      if (currentPointerEvents === "none") {
        bodyElement.style.pointerEvents = "";
      }
    };

    // Check and remove pointer-events initially
    checkAndRemovePointerEvents();

    // Set up an interval to periodically check and remove pointer-events style
    const intervalId = setInterval(checkAndRemovePointerEvents, 1000); // You can adjust the interval time as needed

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Sheet open={isOpen}>
      <SheetContent side={"left"} className=" w-60 shadow-none m-0 p-0">
        
        <Card className=" w-full h-screen overflow-y-auto rounded-none shadow-none border-none ">
          <div className=" border-b py-5 w-full ">
            <div className=" px-4 flex items-center gap-2 text-lg ">
              <Apple size={20} strokeWidth={3} />
              Shadcn Panel
            </div>
          </div>

          <div className=" flex flex-col">
            
            <div className=" nav-link nav-active ">
              <LayoutDashboard size={18} strokeWidth={2} />
              Dashboard
            </div>

            <div className=" nav-link nav-active ">
              <Users size={18} strokeWidth={2} />
              Users
            </div>
          </div>

        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSideBar;
