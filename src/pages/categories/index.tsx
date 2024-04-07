import { useGetCategoriesQuery } from "@/store/api/v1/endpoints/categories";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { LoadingLottie } from "@/components";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";

const Categories = () => {
  const dispatch = useDispatch();
  dispatch(setBreadCrumb([{ title: "Dashboard", link: "/" },{ title: "Categories", link: "/categories" }]));
  const { data, isLoading } = useGetCategoriesQuery({});

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

export default Categories;
