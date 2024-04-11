import { useAppDispatch } from "@toolkit/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@toolkit/Cart/CartSlice";

type TProps = {
  id: number | undefined;
  items: { [key: number]: number };
};

const ButtonsQuantity = ({ id, items }: TProps) => {
  const dispatch = useAppDispatch();

  const IncrementHandler = () => {
    dispatch(incrementQuantity(id));
  };
  const DecrementHandler = () => {
    dispatch(decrementQuantity(id));
  };
  const RemoveHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center  gap-1">
        <button
          onClick={DecrementHandler}
          type="button"
          className="size-10 leading-10  w-[70px]  bg-gray-400 rounded-md text-gray-600 transition hover:opacity-75"
        >
          &minus;
        </button>

        <div className="h-10 w-full pt-3 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
          {items[id]}
        </div>

        <button
          onClick={IncrementHandler}
          type="button"
          className="size-10  leading-10 w-[70px]  bg-gray-400 rounded-md text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
      <button onClick={RemoveHandler} className="btn btn-error mt-3 w-full ">
        Remove
      </button>
    </div>
  );
};

export default ButtonsQuantity;
