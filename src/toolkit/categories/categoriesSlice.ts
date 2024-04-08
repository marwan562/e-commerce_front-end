import { createSlice } from "@reduxjs/toolkit";
import type { ICategoriesState } from "@toolkit/common/types";
import actGetCategories from "./act/actGetCategories";

const initialState: ICategoriesState = {
  status: "idle",
  records: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.status = "success";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCategories };

export default categoriesSlice.reducer;
