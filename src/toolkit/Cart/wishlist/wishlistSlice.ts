import { createSlice } from "@reduxjs/toolkit";
import actLikeToggel from "./act/actLikeToggel";

type TWishlistState = {
  itemsId: number[];
};

const initialState: TWishlistState = {
  itemsId: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});
export { actLikeToggel };
export default wishlistSlice.reducer;
