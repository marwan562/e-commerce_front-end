import { createSlice } from "@reduxjs/toolkit";
import actLikeToggel from "./act/actLikeToggel";
import actGetWishlist from "./act/actGetWishlist";
import { isString, TError, TResponseProducts, TStatus } from "@types";
import { authLogout } from "@toolkit/Auth/authSlice";

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
      if (action.payload.dataType === "productsFullInfo") {
        state.productFullInfo = action.payload.data;
      } else {
        state.itemsId = action.payload.data;
      }
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // When logout reset
    builder.addCase(authLogout, (state) => {
      state.itemsId = [];
      state.productFullInfo = [];
    });
  },
});

export const { cleanWishlist } = wishlistSlice.actions;

export { actLikeToggel, actGetWishlist };
export default wishlistSlice.reducer;
