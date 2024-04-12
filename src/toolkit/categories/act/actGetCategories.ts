import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { TResponseCategories } from "@toolkit/common/types";
import axios from "axios";

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
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue("An expected error");
      }
    }
  }
);

export default actGetCategories;
