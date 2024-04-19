import { createSlice } from "@reduxjs/toolkit";
import { isString, TError, TStatus } from "@types";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

type TAuthState = {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
  accessToken: string | null;
  status: TStatus;
  error: TError;
};

const initialState: TAuthState = {
  user: null,
  accessToken: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
    resetUI: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    // Register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // Login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.status = "success";
      if (action.payload) {
        state.accessToken = action.payload?.accessToken;
        state.user = action.payload.user;
      }
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actAuthRegister, actAuthLogin };
export const { resetUI , authLogout } = authSlice.actions;
export default authSlice.reducer;
