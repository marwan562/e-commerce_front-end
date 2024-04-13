import { useEffect, useState } from "react";
import { useAppDispatch } from "@toolkit/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@toolkit/Cart/CartSlice";

export type CartButtonsHandler = {
  IncrementHandler: (id: number) => void;
  DecrementHandler: (id: number) => void;
  RemoveHandler: (id: number) => void;
  isBtnDisabled: boolean;
};

const useCartButtonsHandler = () => {
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const IncrementHandler = (id: number) => {
    setIsBtnDisabled(true);
    dispatch(incrementQuantity(id));
  };
  const DecrementHandler = (id: number) => {
    dispatch(decrementQuantity(id));
  };
  const RemoveHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (!isBtnDisabled) return;

    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 700);

    return () => {
      clearTimeout(debounce);
    };
  }, [isBtnDisabled]);

  return {IncrementHandler , DecrementHandler , RemoveHandler , isBtnDisabled}
};

export default useCartButtonsHandler;
