import { createSlice } from "@reduxjs/toolkit";
import { TError, TResponseProducts, TStatus } from "@toolkit/common/types";
import { getCartTotalQuantitySelector } from "@toolkit/Cart/selectors/index";
import { actGetProductsById } from "./act/actGetProductsById";

interface ICartState {
  items: { [key: number]: number };
  productsFullInfo: TResponseProducts[];
  status: TStatus;
  error: TError;
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  status: "idle",
  error: null,
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        if (state.items[id] === 1) {
          delete state.items[id];
        } else {
          state.items[id]--;
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(actGetProductsById.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsById.fulfilled, (state, action) => {
      state.status = "success";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsById.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { getCartTotalQuantitySelector };

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
