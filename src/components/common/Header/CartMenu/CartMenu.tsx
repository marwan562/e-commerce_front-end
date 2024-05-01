import { useNavigate } from "react-router-dom";
import Loanding from "@componenets/feedback/Loading/Loanding";
import CartItemList from "@componenets/E-Commerce/CartItemList/CartItemList";
import { cartItemChangeQuantity } from "@toolkit/Cart/CartSlice";
import { useAppDispatch } from "@toolkit/hooks";
import CartSupTotalPrice from "@componenets/E-Commerce/CartSubTotalPrice/CartSupTotalPrice";
import LottieHandler from "../../../feedback/LottieHandler/LottieHandler";
import { TError, TResponseProducts, TStatus } from "@types";

type Props = {
  handleShowCart: () => void;
  product: TResponseProducts[];
  status: TStatus;
  error: TError;
};

const CartMenu = ({ handleShowCart, product, status, error }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeQuantityHandler = (id: number, quantity: number) => {
    dispatch(cartItemChangeQuantity({ id, quantity }));
  };

  const lengthCart = product.length;

  return (
    <div className=" absolute mt-[400px]  max-h-fit  z-30 w-screen max-w-sm border border-gray-600 bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
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
          <Loanding Type="cartMenu" status={status} error={error}>
            {product.length > 0 ? (
              product.map((el) => (
                <CartItemList
                  changeQuantityHandler={changeQuantityHandler}
                  key={el.id}
                  {...el}
                />
              ))
            ) : (
              <LottieHandler type="empty" />
            )}
          </Loanding>
        </ul>

        <CartSupTotalPrice product={product} />

        <div className="space-y-4 text-center">
          <button
            onClick={() => navigate("/cart")}
            className="block w-full rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({lengthCart})
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
