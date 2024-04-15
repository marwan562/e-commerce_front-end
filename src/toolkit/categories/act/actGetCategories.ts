import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { TResponseCategories } from "@toolkit/common/types";
import { axiosErrorHandler } from "@utils/index";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await GlobalBaseURL.get<TResponseCategories[]>(
        "http://localhost:5005/categories"
      );
      const data = res.data;
      return data;
    } catch (err) {
    return rejectWithValue(axiosErrorHandler(err))
    }
  }
);

export default actGetCategories;
