import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderItem, isString, TError, TStatus } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";
import actRemoveOrder from "./act/actRemoveOrder";

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
  reducers: {
    resetStatusAfterOrder: (state) => {
      state.status = "idle";
      state.error = null;
    },
    removeOrder: (state, action) => {
      state.orderList = state.orderList.filter(
        (el) => el.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    // Post Order
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

    //Get Order
    builder.addCase(actGetOrders.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });

    builder.addCase(
      actGetOrders.fulfilled,
      (state, action: PayloadAction<IOrderItem[]>) => {
        state.status = "success";
        state.orderList = action.payload;
      }
    );

    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    //remove order

    builder.addCase(actRemoveOrder.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });

    builder.addCase(actRemoveOrder.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(actRemoveOrder.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export const { resetStatusAfterOrder, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
