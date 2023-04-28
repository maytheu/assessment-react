import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = true;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
