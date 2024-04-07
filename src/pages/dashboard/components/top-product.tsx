import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetProductsQuery } from "@/store/api/v1/endpoints/products";
import { ProductType } from "@/types";

const TopProducts: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery({});
  return (
    <Card className=" dark:text-light dark:border-foreground ">
      <CardHeader>
        <div>Top 10 Products</div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {isLoading ? (
            <div className=" flex justify-center items-center h-[300px] "> 
              loading...
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead className=" w-[200px] ">Title</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data
                  ?.slice(0, 10)
                  .map((product: ProductType, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">
                        {product.title}
                      </TableCell>
                      <TableCell>{product.price} $</TableCell>
                      <TableCell>{product.category.name}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TopProducts;
