import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import axios from "axios";

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const userWishlist = await GlobalBaseURL.get<{ productId: number }[]>(
        `wishlist?userId=1`
      );

      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }

      const concatenetedItemId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const res = await GlobalBaseURL.get(`/products?${concatenetedItemId}`);
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        rejectWithValue(err.response?.data.message || err.message);
      } else {
        rejectWithValue("an exepcted error ");
      }
    }
  }
);
export default actGetWishlist;
