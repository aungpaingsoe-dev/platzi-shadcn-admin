import React from "react";
import SomethingWasWrong from "@/lottie/ErrorCat.json";
import Lottie from "lottie-react";

const GeneralError: React.FC = () => {
  return <Lottie animationData={SomethingWasWrong} loop={true} />;
};

export default GeneralError;
