import React from "react";
import NetworkError from "@/lottie/NetworkError.json";
import Lottie from "lottie-react";

const NetworkErrorComponent: React.FC = () => {
  return <Lottie animationData={NetworkError} loop={true} />;
};

export default NetworkErrorComponent;
