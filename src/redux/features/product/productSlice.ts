import { TProductSlice } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
const initialState: TProductSlice = {
  productName: null,
  category: null,
  stockQuantity: 0,
  brand: null,
  rating: 0,
  productDescription: null,
  price: null,
  image: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
