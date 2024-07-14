import { TProductSlice } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TProductSlice = {
  message: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      const { message } = action.payload;
      state.message = message;
    },
  },
});

export const { createProduct } = productSlice.actions;
export default productSlice.reducer;
