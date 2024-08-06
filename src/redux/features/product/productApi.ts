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
    getAllProducts: builder.query({
      query: ({ queryName, userQuery }) => ({
        url: `/product?${queryName}=${userQuery}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProductIntoDBMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = productApi;
