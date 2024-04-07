import React from "react";
import LightTheme from "../items/light-theme";
import DarkTheme from "../items/dark-theme";
import { useTheme } from "@/services/providers/theme-provider";

const Appearance: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div>
        <div className=" text-xl ">Appearance</div>
        <div className=" text-slate-500 mt-2 ">
          Customize your profile's visual presentation to suit your preferences
          and style.
        </div>
        <div className=" my-4 border dark:border-foreground " />
        <div className=" w-6/12 ">
          <div>
            <div>
              <div className="  ">Theme</div>
              <div className=" text-slate-500 text-sm ">
                Choose a theme for dashboard.
              </div>
            </div>
            <div className=" mt-3 flex gap-2 ">
              <div
                className=" flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => setTheme("light")}
              >
                <div
                  className={`border-2 rounded-md p-2 ${
                    theme == "light" ? "border-dark dark:border-light" : "border-none"
                  }`}
                >
                  <LightTheme />
                </div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="light">Light</label>
                </div>
              </div>

              <div
                className=" flex flex-col items-center gap-2  cursor-pointer "
                onClick={() => setTheme("dark")}
              >
                <div
                  className={`border-2 rounded-md p-2 ${
                    theme == "dark" ? "border-dark dark:border-light" : "border-none"
                  }`}
                >
                  <DarkTheme />
                </div>

                <div className="flex items-center space-x-2">
                  <label htmlFor="dark">Dark</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
