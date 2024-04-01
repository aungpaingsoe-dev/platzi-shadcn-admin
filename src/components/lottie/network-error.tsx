import React from "react";
import NetworkErrorJson from "@/lottie/NetworkError.json";
import Lottie from "lottie-react";

const NetworkError: React.FC = () => {
  return <Lottie animationData={NetworkErrorJson} loop={true} />;
};

export default NetworkError;
