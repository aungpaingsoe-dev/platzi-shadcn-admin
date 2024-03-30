import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableToolProps {
  apiData: [];
}

const DataTableTool: React.FC<DataTableToolProps> = ({ apiData }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-basic hover:bg-basic">
            <TableHead className="rounded-l-xl">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-end">Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="rounded-r-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiData?.map((i: any, index : number) => (
            <TableRow key={i.id} className="bg-[#FCFCFD]">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell className="text-gray-400">{i.email}</TableCell>
              <TableCell className="text-end text-gray-400">
                {i.phone}
              </TableCell>
              <TableCell className="text-gray-400 w-[300px] text-wrap ">
                {i.address}
              </TableCell>
              <TableCell className="text-xl space-x-5"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTableTool;
