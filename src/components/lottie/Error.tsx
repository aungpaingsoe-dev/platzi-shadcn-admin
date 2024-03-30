import React from "react";
import SomethingWasWrong from "@/lottie/Error.json";
import Lottie from "lottie-react";

const ErrorComponent: React.FC = () => {
  return <Lottie animationData={SomethingWasWrong} loop={true} />;
};

export default ErrorComponent;
