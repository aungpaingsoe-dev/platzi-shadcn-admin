import React from "react";
import NotFoundJson from "@/lottie/404.json";
import Lottie from "lottie-react";

const NotFoundError: React.FC = () => {
  return <Lottie animationData={NotFoundJson} loop={true} />;
};

export default NotFoundError;
