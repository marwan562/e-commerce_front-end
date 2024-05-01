import { createSlice } from "@reduxjs/toolkit";
import { IOrderItem, isString, TError, TStatus } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";

interface IOrderState {
  status: TStatus;
  orderList: IOrderItem[];
  error: TError;
}

const initialState: IOrderState = {
  status: "idle",
  orderList: [],
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });

    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export default ordersSlice.reducer;
