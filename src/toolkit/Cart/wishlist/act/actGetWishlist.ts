import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { axiosErrorHandler } from "@utils/index";

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, { rejectWithValue, fulfillWithValue, signal }) => {
    try {
      const userWishlist = await GlobalBaseURL.get<{ productId: number }[]>(
        `wishlist?userId=1`,
        { signal }
      );

      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }

      const concatenetedItemId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");

      const res = await GlobalBaseURL.get(`/products?${concatenetedItemId}`, {
        signal,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);
export default actGetWishlist;
