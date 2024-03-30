import { ContactType } from "@/types";
import { api } from "..";

const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    getContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: (body: ContactType) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, body }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
