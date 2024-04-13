import { actGetProductsById } from "@toolkit/Cart/act/actGetProductsById";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { useEffect } from "react";

const useGetProductsById = () => {
  const { items, productsFullInfo, status, error } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  const product = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  useEffect(() => {
      dispatch(actGetProductsById());
  }, [dispatch, product.length]);
  return { product, status, error };
};

export default useGetProductsById;
