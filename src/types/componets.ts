import React, { ChangeEvent, FocusEvent } from "react";

export interface PasswordInputType {
  name: string;
  id: string;
  value: string;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

export interface ChildrenType {
  children: React.ReactNode;
}
