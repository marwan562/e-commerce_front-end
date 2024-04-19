import { createSlice } from "@reduxjs/toolkit";
import actLikeToggel from "./act/actLikeToggel";
import actGetWishlist from "./act/actGetWishlist";
import { isString, TError, TResponseProducts, TStatus } from "@types";

type TWishlistState = {
  status: TStatus;
  productFullInfo: TResponseProducts[];
  itemsId: number[];
  error: TError;
};

const initialState: TWishlistState = {
  itemsId: [],
  status: "idle",
  productFullInfo: [],
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanWishlist: (state) => {
      state.productFullInfo = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(actLikeToggel.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggel.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
        state.productFullInfo = state.productFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    });
    builder.addCase(actLikeToggel.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // get wishlist items
    builder.addCase(actGetWishlist.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.status = "success";
      state.productFullInfo = action.payload;
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanWishlist } = wishlistSlice.actions;

export { actLikeToggel, actGetWishlist };
export default wishlistSlice.reducer;
