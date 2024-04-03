import React from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/services/providers/theme-provider";
import router from "@/router";

const App: React.FC = () => {

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default App;
