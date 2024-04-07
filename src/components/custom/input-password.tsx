import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { PasswordInputType } from "@/types";

const InputPassword: React.FC<PasswordInputType> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative rounded-md">
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
        className={props.className}
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <LuEye size={18} /> : <LuEyeOff size={18} />}
      </Button>
    </div>
  );
};

export default InputPassword;
