import { createSlice } from "@reduxjs/toolkit";
import { isString, type ICategoriesState } from "@types";
import actGetCategories from "./act/actGetCategories";

const initialState: ICategoriesState = {
  status: "idle",
  records: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    cleanUpCategories: (state) => {
      state.records = [];
    },
  },
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
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCategories };

export const { cleanUpCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
