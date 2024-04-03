import { NetworkErrorLottie } from "@/components";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const NetworkError: React.FC = () => {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center">
        <div className=" w-[250px] ">
          <NetworkErrorLottie />
        </div>
        <span className=" text-3xl font-bold mb-3 leading-tight ">
          Oops! Network Error!
        </span>
        <p className="text-center text-muted-foreground">
          Please check you internet connection.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/">
            <Button variant="ghost">Back Home</Button>
          </Link>

          <Button onClick={() => window.location.reload()}>Reload</Button>
        </div>
      </div>
    </div>
  );
};

export default NetworkError;
