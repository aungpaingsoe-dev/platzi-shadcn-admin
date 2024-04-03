
import { setBreadCrumb } from "@/store/slice/app";
import React from "react";
import { useDispatch } from "react-redux";
import Overview from "./components/overview";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(setBreadCrumb([{ title: "Dashboard", link: "/" }]));

  return (
    <div>
      <div className=" text-2xl mb-4 ">Dashboard</div>
      <Overview/>
    </div>
  );
};

export default Dashboard;
