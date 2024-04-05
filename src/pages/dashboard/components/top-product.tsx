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
import products from "@/services/data/products";

const TopProducts: React.FC = () => {
  return (
    <Card className=" dark:text-light dark:border-foreground ">
      <CardHeader>
        <div>Top Products</div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead className=" w-[80px] ">Image</TableHead>
                <TableHead className=" w-[200px] ">Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.slice(0,20).map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <img src={ product.images[0] } className=" w-full rounded-lg " alt="" />
                  </TableCell>
                  <TableCell className="font-medium">{product.title}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.category.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TopProducts;
