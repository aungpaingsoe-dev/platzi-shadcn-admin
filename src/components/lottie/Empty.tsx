import React from "react";
import EmptyJson from "@/lottie/Empty.json";
import Lottie from "lottie-react";

const EmptyLottieComponent: React.FC = () => {
  return (
    <div className=" w-[400px] ">
      <Lottie animationData={EmptyJson} loop={true} />
    </div>
  );
};

export default EmptyLottieComponent;
