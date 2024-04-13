import Cartitems from "@componenets/E-Commerce/CartItems/Cartitems";
import Loanding from "@componenets/feedback/Loading/Loanding";
import { actGetProductsById } from "@toolkit/Cart/act/actGetProductsById";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { useEffect } from "react";

const Cart = () => {
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
  }, [dispatch]);
  return (
    <Loanding status={status} error={error}>
      <Cartitems product={product} />
     
    </Loanding>
  );
};

export default Cart;
