import Cartitems from "@componenets/E-Commerce/CartItems/Cartitems";
import Loanding from "@componenets/feedback/Loading/Loanding";
import useGetProductsById from "@hooks/useGetProductsById";
import { cartItemChangeQuantity } from "@toolkit/Cart/CartSlice";
import { useAppDispatch } from "@toolkit/hooks";
import { useCallback } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { product, error, status } = useGetProductsById();

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  return (
    <Loanding Type="cart" status={status} error={error}>
      <Cartitems
        product={product}
        changeQuantityHandler={changeQuantityHandler}
      />
    </Loanding>
  );
};

export default Cart;
