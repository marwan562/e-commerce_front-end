import {
  actGetWishlist,
  cleanWishlist,
} from "@toolkit/Cart/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { useEffect } from "react";

const useGetWishlist = () => {
  const { productFullInfo, status, error } = useAppSelector(
    (state) => state.wishlist
  );
  
  const { items } = useAppSelector((state) => state.cart);
  const wishlistItemId = useAppSelector((state) => state.wishlist.itemsId);
  const dispatch = useAppDispatch();

  const record = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
    isLiked: wishlistItemId.includes(el.id),
  }));

  useEffect(() => {
    const Promise = dispatch(actGetWishlist());

    return () => {
      Promise.abort();
      dispatch(cleanWishlist());
    };
  }, [dispatch]);

  return { record, status, error };
};

export default useGetWishlist;
