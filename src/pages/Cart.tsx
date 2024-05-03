import { CartSupTotalPrice } from "@componenets/common";
import CartGridList from "@componenets/common/GridList/CartGridList";
import { CartItemList } from "@componenets/E-Commerce";
import Loanding from "@componenets/feedback/Loading/Loanding";
import useGetProductsById from "@hooks/useGetProductsById";
import { cartItemChangeQuantity } from "@toolkit/Cart/CartSlice";
import { useAppDispatch } from "@toolkit/hooks";
import { TResponseProducts } from "@types";
import { useCallback } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { product, error, status, placeOrderStatus } = useGetProductsById();

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  return (
    <Loanding Type="cart" status={status} error={error}>
      <CartGridList<TResponseProducts>
        placeOrderStatus={placeOrderStatus}
        renderItem={(item) => (
          <CartItemList
            key={item.id}
            {...item}
            changeQuantityHandler={changeQuantityHandler}
          />
        )}
        records={product}
        renderTotalPrice={(item) => <CartSupTotalPrice product={item} />}
      />
    </Loanding>
  );
};

export default Cart;
