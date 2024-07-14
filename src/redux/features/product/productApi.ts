import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProductIntoDB: builder.mutation({
      query: (productInfo) => ({
        url: "/product/create-product",
        method: "POST",
        body: productInfo,
      }),
    }),
  }),
});

export const { useCreateProductIntoDBMutation } = productApi;
