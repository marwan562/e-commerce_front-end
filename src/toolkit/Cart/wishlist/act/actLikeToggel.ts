import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { RootState } from "@toolkit/index";
import { axiosErrorHandler } from "@utils/index";

const actLikeToggel = createAsyncThunk(
  "wishlist/actLikeToggel",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const { auth } = getState() as RootState;

    try {
      const isRecordExist = await GlobalBaseURL.get(
        `/wishlist?userId=${auth.user?.id}&productId=${id}`
      );

      if (isRecordExist.data.length > 0) {
        await GlobalBaseURL.delete(`/wishlist/${isRecordExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await GlobalBaseURL.post("/wishlist", {
          userId: auth.user?.id,
          productId: id,
        });
        return { type: "add", id };
      }
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actLikeToggel;
