import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package2 } from "lucide-react";
import { Category2, ReportMoney, Users   } from "tabler-icons-react"

interface OverviewType {
  title: string;
  value: string | number;
  icon?: JSX.Element;
}

const Overview: React.FC = () => {
  const [overViews] = useState<OverviewType[]>([
    {
      title: "Total Products",
      value: 229,
      icon: <Package2 />,
    },
    {
      title: "Total Categories",
      value: 40,
      icon: <Category2 />,
    },
    {
      title: "Total Incomes",
      value: "13004 $",
      icon: <ReportMoney />,
    },
    {
      title: "Total Users",
      value:  200,
      icon: <Users />,
    },
  ]);

  return (
    <div className=" flex gap-3 ">
      {overViews?.map((overview, index) => (
        <div className=" basis-3/12 " key={index}>
          <Card>
            <CardHeader>
              <CardTitle className=" flex items-center gap-2 opacity-70 font-normal ">
                {overview.icon}
                {overview.title}
              </CardTitle>
              <CardDescription>
                <div className=" text-2xl text-dark ">{overview.value}</div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Overview;
