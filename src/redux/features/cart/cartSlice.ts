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
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item._id === action.payload);
      if (product && typeof product.quantity === "number") {
        if (product.quantity != product.stockQuantity) {
          product.quantity += 1;
        }
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item._id === action.payload);
      if (product && typeof product.quantity === "number") {
        if (product.quantity <= 1) {
          product.quantity += 0;
        } else {
          product.quantity -= 1;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id != action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
