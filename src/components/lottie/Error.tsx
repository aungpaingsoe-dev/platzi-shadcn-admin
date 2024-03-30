import React from "react";
import SomethingWasWrong from "@/lottie/ErrorCat.json";
import Lottie from "lottie-react";

const ErrorComponent: React.FC = () => {
  return <Lottie animationData={SomethingWasWrong} loop={true} />;
};

export default ErrorComponent;
