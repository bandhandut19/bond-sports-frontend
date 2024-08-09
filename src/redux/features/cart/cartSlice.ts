import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductSlice } from "@/types/ProductType";
type cartState = {
  items: TProductSlice[];
};

const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<TProductSlice>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
