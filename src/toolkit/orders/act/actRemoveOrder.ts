import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { axiosErrorHandler } from "@utils/index";
import { removeOrder } from "../ordersSlice";

const actRemoveOrder = createAsyncThunk(
  "order/actRemoveOrder",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
      const res = await GlobalBaseURL.delete(`/orders/${id}`);

      await dispatch(removeOrder(id));

      return res.data;
    } catch (err) {
      if (err) {
        return rejectWithValue(axiosErrorHandler(err));
      }
    }
  }
);

export default actRemoveOrder;
