import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { axiosErrorHandler } from "@utils/index";
import { IResUser } from "src/types/common";

type TFormData = {
  email: string;
  password: string;
};

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await GlobalBaseURL.post<IResUser>(`/login`, formData);
      return res.data;
    } catch (err) {
      if (err) {
        return rejectWithValue(axiosErrorHandler(err));
      }
    }
  }
);

export default actAuthLogin;
