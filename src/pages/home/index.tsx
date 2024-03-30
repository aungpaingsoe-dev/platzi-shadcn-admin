import React from "react";
import { Navigate } from "react-router";

const HomePage: React.FC = () => {
  return <Navigate to="/contact" />;
};

export default HomePage;
