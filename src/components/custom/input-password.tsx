import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LuEye, LuEyeOff } from "react-icons/lu";
import React, { ChangeEvent, FocusEvent } from "react";

interface PasswordInputProps {
  name: string;
  id: string;
  value: string;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputPassword: React.FC<PasswordInputProps> = (props: any) => {
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
