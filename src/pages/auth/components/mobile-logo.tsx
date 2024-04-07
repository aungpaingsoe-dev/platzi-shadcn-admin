import React from 'react'
import { SiPlatzi } from "react-icons/si";
import { Plus } from "tabler-icons-react";

const MobileLogo : React.FC = () => {

  return (
    <div className=" lg:hidden basis-1/2 flex-col justify-center items-center ">
    <div>
      <div className=" flex items-center justify-center gap-3 ">
        <SiPlatzi className=" text-dark  text-[90px]  " />
        <Plus size={70} strokeWidth={3} className=" text-dark " />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className=" text-dark  w-[90px] h-[90px] "
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
      </div>
    </div>
    <div className=" text-dark text-center mt-8 ">
      <div >Shadcn UI + Platzi Api Dashboard</div>
      <div className=" text-xs text-slate-500 mt-4 ">
        -- By Aung Paing Soe --
      </div>
    </div>
  </div>
  )
}

export default MobileLogo