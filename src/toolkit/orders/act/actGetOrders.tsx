import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { RootState } from "@toolkit/index";
import { axiosErrorHandler } from "@utils/index";

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, getState } = thunkAPI;

    const { auth, orders } = getState() as RootState;

    if (!orders.orderList) {
      return fulfillWithValue([]);
    }

    try {
      const res = await GlobalBaseURL.get(`/orders?userId=${auth.user?.id}`);
      return res.data;
    } catch (err) {
      rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actGetOrders;
