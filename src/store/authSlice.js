import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToken: JSON.parse(localStorage.getItem("accessToken")) || "",
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem(
        "isLogged",
        JSON.stringify(true)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRedux } = authSlice.actions;

export default authSlice.reducer;
