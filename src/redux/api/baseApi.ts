import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bond-sports-backend.vercel.app/api/bond-sports",
    credentials: "include",
  }),
  tagTypes: ["Product", "cart"],
  endpoints: () => ({}),
});
