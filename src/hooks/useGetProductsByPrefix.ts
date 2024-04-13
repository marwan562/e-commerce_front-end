import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@toolkit/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useGetProductsByPrefix = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, status, error } = useAppSelector((state) => state.products);
  const { items } = useAppSelector((state) => state.cart);

  const recordWithQuantity = records.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  useEffect(() => {
    if (prefix && typeof prefix === "string") {
      dispatch(actGetProductsByCatPrefix(prefix));
    }

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return { recordWithQuantity, status, error };
};

export default useGetProductsByPrefix;
