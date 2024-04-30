import { getCartTotalQuantitySelector } from "@toolkit/Cart/selectors";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { authLogout } from "@toolkit/Auth/authSlice";
import { actGetWishlist } from "@toolkit/Cart/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useHeader = () => {
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAppSelector((state) => state.auth);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(true);

  const navigate = useNavigate();
  const CartQuantityItems = useAppSelector(getCartTotalQuantitySelector);
  const WishlistQuantityItems = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  const authLogoutHandler = () => {
    dispatch(authLogout());
    navigate("login", { replace: true });
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("productId"));
    }
  }, [dispatch, accessToken]);
  return {
    accessToken,
    WishlistQuantityItems,
    handleShowCart,
    CartQuantityItems,
    showCart,
    user,
    authLogoutHandler,
    showMenu,
    setShowMenu,
  };
};

export default useHeader;
