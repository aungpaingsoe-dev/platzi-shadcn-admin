import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  return (
    <div className=" w-screen h-14 bg-white flex items-center border-b top-0 fixed ">
      <div className=" w-10/12 mx-auto flex items-center justify-between">
        <div className=" font-bold ">React Frame</div>
        <div>
          <ul>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
