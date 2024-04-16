import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { axiosErrorHandler } from "@utils/index";

const actLikeToggel = createAsyncThunk(
  "wishlist/actLikeToggel",
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const isRecordExist = await GlobalBaseURL.get(
        `/wishlist?userId=1&productId=${id}`
      );

      if (isRecordExist.data.length > 0) {
        await GlobalBaseURL.delete(`/wishlist/${isRecordExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await GlobalBaseURL.post("/wishlist", { userId: "1", productId: id });
        return { type: "add", id };
      }
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actLikeToggel;
