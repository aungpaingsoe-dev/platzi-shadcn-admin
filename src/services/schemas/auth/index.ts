import * as yub from "yup";
import { SignInType, SignUpType } from "@/types";

export const signInSchema: yub.ObjectSchema<SignInType> = yub.object({
  email: yub
    .string()
    .email("Email is invalid")
    .required("Email field is required"),
  password: yub.string().required("Password field is required"),
});

export const signUpSchema: yub.ObjectSchema<SignUpType> = yub.object({
  name: yub.string().required("Name field is required"),
  email: yub
    .string()
    .email("Email is invalid")
    .required("Email field is required"),
  password: yub.string().required("Password field is required"),
  password_confirmation: yub
    .string()
    .oneOf([yub.ref("password")], "Password confirmation must be same with password field")
    .required("Confirm password is required"),
});
