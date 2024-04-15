import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { TResponseProducts } from "@toolkit/common/types";
import { axiosErrorHandler } from "@utils/index";

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await GlobalBaseURL.get<TResponseProducts[]>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      const data = res.data;
      return data;
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actGetProductsByCatPrefix;
