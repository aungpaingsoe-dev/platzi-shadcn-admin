import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { SheetSideBar } from "@/components";
import { useLocation } from "react-router";

const MobileSideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setOpen(false);
}, [location]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button
          variant="outline"
          size="icon"
          className=" rounded-full flex items-center border-none shadow-none lg:hidden"
        >
          <RiMenuUnfoldLine className=" text-2xl" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className=" w-60 ">
        <SheetSideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
