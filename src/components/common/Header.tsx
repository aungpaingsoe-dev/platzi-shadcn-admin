import React from "react";
import { SheetSideBar, ToggleMode } from "@/components";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu2 } from "tabler-icons-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/store/slice/sidebar";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state: any) => state.sidebar.isOpen);

  return (
    <div className=" w-full h-14 py-3 flex justify-between items-center gap-2 ">
      <Button variant="link" size="icon" onClick={() => dispatch(toggle())}>
        <Menu2 size={22}  strokeWidth={2} />
      </Button>
      <SheetSideBar isOpen={isSideBarOpen} />
      <div className=" basis-3/12 ">
        <Input placeholder="Search..." />
      </div>
      <div className=" basis-9/12 ">
        <div className=" flex justify-end items-center gap-3 ">
          <ToggleMode />
          <Avatar>
            <AvatarFallback>APS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
