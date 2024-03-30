import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useCookieStorage from "@/hooks/useCookieStorage";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const { getData } = useCookieStorage();
      const token = getData("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      
      return headers;
    },
  }),
  tagTypes: ["Contact"],
  endpoints: () => ({}),
});
