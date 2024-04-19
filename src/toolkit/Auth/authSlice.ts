import { createSlice } from "@reduxjs/toolkit";
import { isString, TError, TStatus } from "@types";
import actAuthRegister from "./act/actAuthRegister";

type TAuthState = {
  status: TStatus;
  error: TError;
};

const initialState: TAuthState = {
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
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
  },
});

export { actAuthRegister };
export default authSlice.reducer;
