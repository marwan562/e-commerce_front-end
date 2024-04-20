import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { RootState } from "@toolkit/index";
import { axiosErrorHandler } from "@utils/index";

type TDataTypes = "productsFullInfo" | "productId";

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (dataType: TDataTypes, { rejectWithValue, signal, getState }) => {
    const { auth } = getState() as RootState;

    try {
      const userWishlist = await GlobalBaseURL.get<{ productId: number }[]>(
        `wishlist?userId=${auth.user?.id}`,
        { signal }
      );

      if (!userWishlist.data.length) {
        return { data: [], dataType: "productsFullInfo" };
      }

      if (dataType === "productId") {
        const concatenetedItemId = userWishlist.data.map((el) => el.productId);
        return { data: concatenetedItemId, dataType: "productId" };
      } else {
        const concatenetedItemId = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");

        const res = await GlobalBaseURL.get(`/products?${concatenetedItemId}`, {
          signal,
        });
        return { data: res.data, dataType: "productsFullInfo" };
      }
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);
export default actGetWishlist;
