import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { Mail, User, UserCheck } from "tabler-icons-react";

const Account: React.FC = () => {
  return (
    <div>
      <div className=" text-xl ">Personal Information</div>
      <div className=" text-slate-500 mt-2 ">
        Access and manage your personal information, including personal details,
        preferences, and settings.
      </div>
      <div className=" my-4 border dark:border-foreground " />
      <div className=" lg:w-6/12 ">
        <div className=" flex flex-col lg:flex-row flex-wrap ">
          <div className=" basis-1/2 p-1 ">
            <Card className=" dark:text-light dark:border-foreground ">
              <CardHeader>
                <div className=" flex  justify-between ">
                  Username <User />
                </div>
                <div className=" text-slate-500  ">John</div>
              </CardHeader>
            </Card>
          </div>
          <div className=" basis-1/2 p-1  ">
            <Card className=" dark:text-light dark:border-foreground ">
              <CardHeader>
                <div className=" flex  justify-between ">
                  Username <Mail />
                </div>
                <div className=" text-slate-500 ">John@gmail.com</div>
              </CardHeader>
            </Card>
          </div>
          <div className=" basis-1/2 p-1 ">
            <Card className=" dark:text-light dark:border-foreground ">
              <CardHeader>
                <div className=" flex justify-between ">
                  Role <UserCheck />
                </div>
                <div className=" text-slate-500 ">Admin</div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
