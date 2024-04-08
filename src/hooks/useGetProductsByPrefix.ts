import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { actGetProductsByCatPrefix } from "@toolkit/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useGetProductsByPrefix = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(prefix));
  }, [dispatch, prefix]);
  
  return {records, status, error}
};

export default useGetProductsByPrefix;
