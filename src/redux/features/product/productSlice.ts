import { TProductSlice } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TProductSlice = {
  message: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
