import React from "react";
import { BreadCrumb, ToggleMode } from "@/components";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBarOpen } from "@/store/slice/app";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state: any) => state.app.isSideBarOpen);

  return (
    <div className=" w-full h-14 py-3 flex justify-between items-center ">
      <div className=" flex gap-2 items-center ">
        <Button
          variant="outline"
          size="icon"
          className=" rounded-full border-none shadow-none "
          onClick={() => dispatch(toggleSideBarOpen())}
        >
          {isSideBarOpen ? (
            <RiMenuFoldLine className=" text-2xl" />
          ) : (
            <RiMenuUnfoldLine className=" text-2xl" />
          )}
        </Button>

        <BreadCrumb />
      </div>
      <div className=" flex justify-end items-center gap-3 ">
        <ToggleMode />
        <Avatar>
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
