import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderComponent: React.FC = () => {
  return (
    <div className=" w-screen h-14 bg-white flex items-center border-b top-0 fixed ">
      <div className=" w-10/12 mx-auto flex items-center justify-between">
        <div>Contact</div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
