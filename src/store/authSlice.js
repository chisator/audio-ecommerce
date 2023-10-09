import { createSlice } from "@reduxjs/toolkit";
import { login, loginGoogle } from "./authThunk";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  accessToken: JSON.parse(localStorage.getItem("accessToken")) || "",
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      /* console.log(action.payload);
      state.user = {...action.payload};
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      localStorage.setItem("user", JSON.stringify({...action.payload}));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem("isLogged", JSON.stringify(true)); */
    },
    clearLogin: (state) => {
      state.user = {};
      state.accessToken = "";
      state.isLogged = false;
      state.isLoading = false;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isLogged");
    },
    deleteUser: () => {},
  },
  extraReducers:(builder)=>{
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = { ...action.payload };
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem("isLogged", JSON.stringify(true));
    });
     builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.accessToken = "";
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(loginGoogle.fulfilled, (state, action) => {
      state.user = action.payload.userData
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
  }
});

// Action creators are generated for each case reducer function
export const { loginRedux, clearLogin, deleteUser } = authSlice.actions;

export default authSlice.reducer;
