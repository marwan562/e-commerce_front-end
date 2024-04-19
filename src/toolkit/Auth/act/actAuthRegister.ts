import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { axiosErrorHandler } from "@utils/index";
import { IFormData, IResUser } from "src/types/common";

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: IFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await GlobalBaseURL.post<IResUser>(`/register`, formData);
      console.log(res.data);

      return res.data;
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actAuthRegister;
