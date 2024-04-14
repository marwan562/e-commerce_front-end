import { createSlice } from "@reduxjs/toolkit";
import actLikeToggel from "./act/actLikeToggel";
import { TError } from "@toolkit/common/types";

type TWishlistState = {
  itemsId: number[];
  error: TError;
};

const initialState: TWishlistState = {
  itemsId: [],
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(actLikeToggel.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggel.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
      }
    });
    builder.addCase(actLikeToggel.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actLikeToggel };
export default wishlistSlice.reducer;
