import { createSlice } from "@reduxjs/toolkit";
import { TResponseProducts } from "@toolkit/common/types";
import { getCartTotalQuantitySelector } from "@toolkit/Cart/selectors/index";

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TResponseProducts[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
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
      console.log(state.items[id]);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      delete state.items[id];
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      // or const { id } = action.payload; if like above

      if (state.items[id]) {
        state.items[id]++;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      // or const { id } = action.payload; if like above

      if (state.items[id]) {
        if (state.items[id] === 1) {
          // Delete if quantity will go to 0
          delete state.items[id];
        } else {
          // Decrement otherwise
          state.items[id]--;
        }
      }
    },
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
