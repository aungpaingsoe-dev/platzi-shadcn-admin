import React from "react";
import { Outlet } from "react-router-dom";
import { AuthGuard, Header, SideBar } from "@/components";
import { useSelector } from "react-redux";

const MainLayout: React.FC = () => {
  const isSideBarOpen = useSelector((state: any) => state.app.isSideBarOpen);
  return (
    <AuthGuard>
      <div className="flex">
        <SideBar />
        <main className={" w-full z-50 px-5 " + ( isSideBarOpen ? "ms-60" : "ms-14" )}>
          <Header />
          <div className=" mt-6 ">
            <Outlet />
          </div>
        </main>
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
