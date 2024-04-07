import React from "react";
import { Outlet } from "react-router-dom";
import { AuthGuard, TopHeader, SideBar } from "@/components";
import { useSelector } from "react-redux";

const MainLayout: React.FC = () => {
  const isSideBarOpen = useSelector((state: any) => state.app.isSideBarOpen);
  return (
    <AuthGuard>
      <div className="flex">
        <div className=" hidden lg:block">
          <SideBar />
        </div>
        <main
          className={
            " w-full lg:px-5 px-2 " + (isSideBarOpen ? "lg:ms-60" : "lg:ms-14")
          }
        >
          <TopHeader />
          <div className=" mt-6 ">
            <Outlet />
          </div>
        </main>
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
