
import { useGetProductsQuery } from "@/store/api/v1/endpoints/products";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { LoadingLottie } from "@/components";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";

const Products = () => {
  const dispatch = useDispatch();
  dispatch(setBreadCrumb([{ title: "Dashboard", link: "/" },{ title: "Products", link: "/products" }]));
  const { data, isLoading } = useGetProductsQuery({});

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

export default Products;
