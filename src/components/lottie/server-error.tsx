import React from "react";
import ServerErrorJson from "@/lottie/500.json";
import Lottie from "lottie-react";

const ServerError: React.FC = () => {
  return <Lottie animationData={ServerErrorJson} loop={true} />;
};

export default ServerError;
