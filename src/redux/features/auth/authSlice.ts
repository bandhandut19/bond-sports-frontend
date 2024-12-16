import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TToken = {
  token: string;
};
type authState = {
  token: string;
};

const initialState: authState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginToken: (state, action: PayloadAction<TToken>) => {
      state.token = action.payload.token;
    },
  },
});

export const { loginToken } = authSlice.actions;
export default authSlice.reducer;
