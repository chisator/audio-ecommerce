import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  accessToken: JSON.parse(localStorage.getItem("accessToken")) || "",
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload);
      state.user = {...action.payload};
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      localStorage.setItem("user", JSON.stringify({...action.payload}));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem("isLogged", JSON.stringify(true));
    },
    clearLogin: (state) => {
      state.user = {};
      state.accessToken = "";
      state.isLogged = false;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isLogged");
    },
    deleteUser: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { loginRedux, clearLogin, deleteUser } = authSlice.actions;

export default authSlice.reducer;
