import { SignInType, SignUpType } from "@/types";
import { api } from "..";

const authEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: SignInType) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation({
      query: (body: SignUpType) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authEndPoint;
