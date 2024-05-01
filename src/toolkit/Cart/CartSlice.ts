import { createSlice } from "@reduxjs/toolkit";
import { isString, TError, TResponseProducts, TStatus } from "@types";
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
      state.productsFullInfo = state.productsFullInfo.filter(
        (el) => el.id !== action.payload
      );
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
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    cleanProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
    clearCartAferPlaceOrder: (state) => {
      state.productsFullInfo = [];
      state.items = {};
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
      if (isString(action.payload)) {
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
  cartItemChangeQuantity,
  cleanProductsFullInfo,
  clearCartAferPlaceOrder
} = CartSlice.actions;

export default CartSlice.reducer;
