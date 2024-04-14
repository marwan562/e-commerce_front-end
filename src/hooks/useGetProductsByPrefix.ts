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

  useEffect(() => {
    if (prefix && typeof prefix === "string") {
      dispatch(actGetProductsByCatPrefix(prefix));
    }

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return { records, status, error };
};

export default useGetProductsByPrefix;
