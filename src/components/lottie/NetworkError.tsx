import React from "react";
import NotFoundJson from "@/lottie/Network.json";
import Lottie from "lottie-react";

const NetworkErrorComponent: React.FC = () => {
  return <Lottie animationData={NotFoundJson} loop={true} />;
};

export default NetworkErrorComponent;
