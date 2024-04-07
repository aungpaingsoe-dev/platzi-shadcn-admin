import React from "react";
import LoadingJson from "@/lottie/Loading.json";
import Lottie from "lottie-react";

const Loading: React.FC = () => {
  return <Lottie animationData={LoadingJson} 
  size={ 20 }
  loop={true} />;
};

export default Loading;