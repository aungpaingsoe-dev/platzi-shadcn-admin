import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";
import Account from "./components/tabs/account";
import ChangePassword from "./components/tabs/change-password";
import Appearance from "./components/tabs/appearance";

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(
    setBreadCrumb([
      {
        title: "Dashboard",
        link: "/dashboard",
      },
      {
        title: "Settings",
        link: "/settings",
      },
    ])
  );

  return (
    <div>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account" className="lg:w-[150px] w-full">
            Account
          </TabsTrigger>
          <TabsTrigger value="change-password" className="lg:w-[150px] w-full">
            Change Password
          </TabsTrigger>
          <TabsTrigger value="apperance" className=" lg:w-[150px] w-full ">
            Apperance
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className=" mt-4 ">
          <Account />
        </TabsContent>
        <TabsContent value="change-password" className=" mt-4 ">
          <ChangePassword />
        </TabsContent>
        <TabsContent value="apperance" className=" mt-4 ">
          <Appearance />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
