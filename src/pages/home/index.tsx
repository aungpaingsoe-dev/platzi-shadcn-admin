import React from "react";
import { Navigate } from "react-router";

const Home: React.FC = () => {
  return <Navigate to={'/dashboard'} />
};

export default Home;
