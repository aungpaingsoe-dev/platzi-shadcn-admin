import { ChangePasswordType } from "@/types";
import * as yub from "yup";

export const ChangePasswordSchema: yub.ObjectSchema<ChangePasswordType> =
  yub.object({
    old_password: yub.string().required("Old password field is required"),
    new_password: yub.string().required("New password field is required"),
    new_password_confirmation: yub
      .string()
      .required("New confirm password field is required"),
  });
