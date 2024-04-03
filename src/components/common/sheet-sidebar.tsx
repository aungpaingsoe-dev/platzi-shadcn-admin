import React, { useEffect, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sidebar-sheet";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import menusList from "@/services/data/menus";
import { Apple, LetterI, ChevronUp, ChevronDown } from "tabler-icons-react";
import { useNavigate } from "react-router";

interface MenuItem {
  title: string;
  link?: string;
  icon?: JSX.Element;
  children?: MenuItem[];
  isOpen?: boolean; // New property to track open/closed state
}

interface SheetSideBarProps {
  isSideBarOpen: boolean;
}

const SheetSideBar: React.FC<SheetSideBarProps> = ({ isSideBarOpen }) => {
  const [menus, setMenus] = useState<MenuItem[]>(menusList);
  const navigate = useNavigate();

  const handleOpenDropDownSideBar = (index: number) => {
    const updatedMenus = [...menus];
    updatedMenus[index].isOpen = !updatedMenus[index].isOpen;
    setMenus(updatedMenus);
  };

  const handleNavigate = (menus: MenuItem) => {
    navigate(`${menus.link}`);
  };

  // Disable Pointer Envent None
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
    <Sheet open={isSideBarOpen}>
      <SheetContent
        side={"left"}
        className="w-60 shadow-none m-0 p-0 focus-visible:outline-none"
      >
        <Card className="w-full h-screen overflow-y-auto rounded-none shadow-none border-none">
          <div className="border-b py-5 w-full">
            <div className="px-4 flex items-center gap-2 text-lg">
              <Apple size={20} strokeWidth={3} />
              Shadcn Panel
            </div>
          </div>

          <div className="flex flex-col">
            {menus?.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.children ? (
                  <Collapsible className="flex flex-col items-start">
                    <CollapsibleTrigger
                      className="nav-link hover:nav-active w-full flex justify-between items-center focus-visible:outline-none"
                      onClick={() => handleOpenDropDownSideBar(index)}
                    >
                      <div className="flex gap-2 items-center">
                        {menu.icon && menu.icon}
                        {menu.title}
                      </div>

                      {menu.isOpen ? (
                        <ChevronUp size={18} strokeWidth={2} />
                      ) : (
                        <ChevronDown size={18} strokeWidth={2} />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="collapsibleDropdown" asChild>
                      <ul className="w-full ps-2">
                        {menu.children.map((child, childIndex) => (
                          <li
                            key={childIndex}
                            className="nav-link py-2 hover:nav-active "
                            onClick={() => handleNavigate(child)}
                          >
                            <LetterI size={18} strokeWidth={2} />
                            {child.icon && child.icon}
                            {child.title}
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <div className="nav-link hover:nav-active" onClick={() => handleNavigate(menu)}>
                    {menu.icon && menu.icon}
                    {menu.title}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSideBar;
