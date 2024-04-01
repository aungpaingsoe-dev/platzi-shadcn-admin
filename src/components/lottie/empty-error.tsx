import React from "react";
import EmptyJson from "@/lottie/Empty.json";
import Lottie from "lottie-react";

const EmptyError: React.FC = () => {
  return <Lottie animationData={EmptyJson} loop={true} />;
};

export default EmptyError;
