import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProductIntoDB: builder.mutation({
      query: (productInfo) => ({
        url: "/product/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    getAllProducts: builder.query({
      query: ({ queryName, userQuery }) => ({
        url: `/product?${queryName}=${userQuery}`,
        method: "GET",
      }),

      providesTags: (result) =>
        result
          ? [{ type: "Product", id: "LIST" }]
          : [{ type: "Product", id: "LIST" }],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),

      providesTags: (id) => [{ type: "Product", id }],
    }),
  }),
});

export const {
  useCreateProductIntoDBMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = productApi;

export default productApi;
