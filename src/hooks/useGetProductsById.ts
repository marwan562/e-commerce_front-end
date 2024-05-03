import { actGetProductsById } from "@toolkit/Cart/act/actGetProductsById";
import { cleanProductsFullInfo } from "@toolkit/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { resetStatusAfterOrder } from "@toolkit/orders/ordersSlice";
import { useEffect } from "react";

const useGetProductsById = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, status, error } = useAppSelector(
    (state) => state.cart
  );
  const placeOrderStatus = useAppSelector((state) => state.orders.status);

  const product = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  useEffect(() => {
    const promise = dispatch(actGetProductsById());

    return () => {
      promise.abort();
      dispatch(cleanProductsFullInfo());
      dispatch(resetStatusAfterOrder());
    };
  }, [dispatch]);
  return { product, status, error, placeOrderStatus };
};

export default useGetProductsById;
