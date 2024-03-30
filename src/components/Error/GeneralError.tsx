import { ErrorLottie } from "@/components";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GeneralError = () => {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center ">
        <div className=" w-[300px] ">
          <ErrorLottie />
        </div>
        <span className=" text-3xl font-bold mb-5 leading-tight ">
          Oops! Something went wrong {`:')`}
        </span>
        <p className="text-center text-muted-foreground">
          We apologize for the inconvenience. <br /> Please try again later.
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

export default GeneralError;
