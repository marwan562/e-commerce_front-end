import { createAsyncThunk } from "@reduxjs/toolkit";
import { GlobalBaseURL } from "@services/API/globalAxsios";
import { RootState } from "@toolkit/index";
import { IOrderItem } from "@types";
import { axiosErrorHandler } from "@utils/index";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (supTotal, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI;
    const { auth, cart } = getState() as RootState;

    const orderItems = cart.productsFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      quantity: cart.items[el.id],
    }));

    try {
      const res = await GlobalBaseURL.post<IOrderItem[]>(`/orders`, {
        userId: auth.user?.id,
        items: orderItems,
        supTotal,
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(axiosErrorHandler(err));
    }
  }
);

export default actPlaceOrder;
