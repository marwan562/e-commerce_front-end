import Cartitems from "@componenets/E-Commerce/CartItems/Cartitems";
import Loanding from "@componenets/feedback/Loading/Loanding";
import useGetProductsById from "@hooks/useGetProductsById";

const Cart = () => {
  const { product, error, status } = useGetProductsById();

  return (
    <Loanding status={status} error={error}>
      <Cartitems product={product} />
    </Loanding>
  );
};

export default Cart;
