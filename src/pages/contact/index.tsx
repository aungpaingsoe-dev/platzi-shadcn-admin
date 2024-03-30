import { useGetContactsQuery } from "@/store/api/v1/endpoints/contact";
import DataTableTool from "./tools/DataTable";
import React from "react";

const ContactPage: React.FC = () => {
  const { data } = useGetContactsQuery({});
  console.log(data?.contacts?.data);
  return (
    <div>
      <DataTableTool apiData={data?.contacts?.data} />
    </div>
  );
};

export default ContactPage;
