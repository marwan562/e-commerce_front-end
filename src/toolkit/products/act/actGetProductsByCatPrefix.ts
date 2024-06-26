import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { TResponseProducts } from "@types";
import { axiosErrorHandler } from "@utils/index";

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await GlobalBaseURL.get<TResponseProducts[]>(
        `http://localhost:5005/products?cat_prefix=${prefix}`,
        { signal }
      );
      const data = res.data;
      return data;
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actGetProductsByCatPrefix;
