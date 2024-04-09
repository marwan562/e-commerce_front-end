import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/globalAxsios";
import { TResponseProducts } from "@toolkit/common/types";
import axios from "axios";

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await GlobalBaseURL.get<TResponseProducts[]>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      const data = res.data;
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue("An expected error");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
