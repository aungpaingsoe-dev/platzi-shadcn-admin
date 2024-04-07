import React from "react";

const LightTheme: React.FC = () => {
  return (
    <div className="items-center rounded-md border-2 border-foreground border-muted p-1 hover:border-accent w-full lg:w-[200px]">
      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
        </div>
        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
          <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
        </div>
        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
          <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
        </div>
      </div>
    </div>
  );
};

export default LightTheme;
