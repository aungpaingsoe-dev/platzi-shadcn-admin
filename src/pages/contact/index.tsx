import { useGetContactsQuery } from "@/store/api/v1/endpoints/contact";
import React from "react";

const ContactPage: React.FC = () => {
  const { data } = useGetContactsQuery({});
  console.log(data);
  
  return (
    <div>
      <div className=" dark:bg-black dark:text-white" >
        Hello World
      </div>
    </div>
  );
};

export default ContactPage;
