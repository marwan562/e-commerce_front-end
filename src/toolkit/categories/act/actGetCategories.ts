import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { TResponseCategories } from "@types";
import { axiosErrorHandler } from "@utils/index";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await GlobalBaseURL.get<TResponseCategories[]>(
        "/categories",
        { signal }
      );
      const data = res.data;
      return data;
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actGetCategories;



