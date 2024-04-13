import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { TResponseProducts } from "@toolkit/common/types";
import { RootState } from "@toolkit/index";
import axios from "axios";

export const actGetProductsById = createAsyncThunk(
  "CartSlice/actGetProductsById",
  async (_, thunkAPI) => {
    const { fulfillWithValue, getState, rejectWithValue } = thunkAPI;

    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenetedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      const res = await GlobalBaseURL.get<TResponseProducts[]>(
        `products?${concatenetedItemsId}`
      );
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue("An expected error");
      }
    }
  }
);
