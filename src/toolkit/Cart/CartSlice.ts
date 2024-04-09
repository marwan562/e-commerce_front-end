import { createSlice } from "@reduxjs/toolkit";
import { TResponseProducts } from "@toolkit/common/types";

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
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
