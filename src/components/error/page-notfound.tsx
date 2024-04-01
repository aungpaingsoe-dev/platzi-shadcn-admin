import React from "react";
import { NotFoundLottie } from "@/components";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageNotFoundError: React.FC = () => {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <div className=" w-[400px] ">
          <NotFoundLottie />
        </div>
        <span className=" text-3xl font-bold mb-3 mt-7 leading-tight ">
          Oops! Page Not Found!
        </span>
        <p className="text-center text-muted-foreground">
          It seems like the page you're looking for <br />
          does not exist or might have been removed.
        </p>
        <div className="mt-6">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundError;
