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
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { loginToken, logout } = authSlice.actions;
export default authSlice.reducer;
