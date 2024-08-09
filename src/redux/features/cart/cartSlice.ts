import { createSlice } from "@reduxjs/toolkit";

type cartState = {
  items: number;
};

const initialState: cartState = {
  items: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state) => {
      state.items = state.items + 1;
    },
    removeItems: (state) => {
      state.items = state.items - 1;
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
