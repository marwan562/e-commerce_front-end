import useGetProductsById from "@hooks/useGetProductsById";

import { useNavigate } from "react-router-dom";
import Loanding from "@componenets/feedback/Loading/Loanding";
import CartItemList from "@componenets/E-Commerce/CartItemList/CartItemList";

type Props = {
  handleShowCart: () => void;
};
const CartMenu = ({ handleShowCart }: Props) => {
  const { product, status, error } = useGetProductsById();
  const navigate = useNavigate();
  return (
    <div className=" absolute mt-[550px]  max-h-fit  z-30 w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={handleShowCart}
        className="absolute z-50 end-4 top-4 text-gray-600 transition hover:scale-110"
      >
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          <Loanding status={status} error={error}>
            {product.map((el) => (
              <CartItemList key={el.id} {...el} />
            ))}
          </Loanding>
        </ul>

        <div className="space-y-4 text-center">
          <button
            onClick={() => navigate("/cart")}
            className="block w-full rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart (2)
          </button>

          <a
            href="#"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </a>

          <a
            onClick={handleShowCart}
            href="#"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
