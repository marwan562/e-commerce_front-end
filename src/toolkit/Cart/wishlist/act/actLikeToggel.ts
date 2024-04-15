import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import axios from "axios";

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
        return { type: "add", id};
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data?.message || err.message);
      } else {
        return rejectWithValue("an unexpected error ");
      }
    }
  }
);

export default actLikeToggel;
