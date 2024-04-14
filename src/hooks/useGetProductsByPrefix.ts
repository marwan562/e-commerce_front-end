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
  const { items } = useAppSelector((state) => state.cart);
  const wishlistItemId = useAppSelector((state) => state.wishlist.itemsId);
  const { records, status, error } = useAppSelector((state) => state.products);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: items[el.id],
    isLiked: wishlistItemId.includes(el.id),
  }));

  useEffect(() => {
    if (prefix && typeof prefix === "string") {
      dispatch(actGetProductsByCatPrefix(prefix));
    }

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return { productsFullInfo, status, error };
};

export default useGetProductsByPrefix;
