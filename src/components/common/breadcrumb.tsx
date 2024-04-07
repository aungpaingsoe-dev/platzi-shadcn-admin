import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSelector } from "react-redux";
import { BreadcrumbType } from "@/types";
import React from "react";

const Breadcrumbs = () => {
  const breadCrumbs = useSelector((state: any) => state.app.breadCrumbs);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadCrumbs?.map((breadcrumb: BreadcrumbType, index: number) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb.link}>
                {breadcrumb.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadCrumbs.length - 1 && ( 
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
