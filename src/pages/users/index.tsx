import { LoadingLottie } from "@/components";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useGetUsersQuery } from "@/store/api/v1/endpoints/user";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";

const Users = () => {
  const dispatch = useDispatch();
  dispatch(setBreadCrumb([{ title: "Dashboard", link: "/" },{ title: "Users", link: "/users" }]));
  const { data, isLoading } = useGetUsersQuery({});
  if (isLoading) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingLottie />
        </div>
      </div>
    );
  } else {
    return <DataTable columns={columns} data={data} />;
  }
};

export default Users;
