import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { RootState } from "@toolkit/index";
import { axiosErrorHandler } from "@utils/index";



const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, { rejectWithValue, fulfillWithValue, signal, getState }) => {
    const { auth } = getState() as RootState;

    try {
      const userWishlist = await GlobalBaseURL.get<{ productId: number }[]>(
        `wishlist?userId=${auth.user?.id}`,
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
