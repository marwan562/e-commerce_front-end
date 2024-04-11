import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, items) => {
      return acc + items;
    }, 0);
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
