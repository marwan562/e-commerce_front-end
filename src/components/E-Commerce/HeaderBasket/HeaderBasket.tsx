import { useState, useEffect } from "react";
import Cart from "@assets/Svg/CartSvg";
import { getCartTotalQuantitySelector } from "@toolkit/Cart/selectors";
import { useAppSelector } from "@toolkit/hooks";

type Props = {
  handleShowCart: () => void;
};

const HeaderBasket = ({ handleShowCart }: Props) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const QuantityAllItems = useAppSelector(getCartTotalQuantitySelector);

  useEffect(() => {
    if (!QuantityAllItems) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [QuantityAllItems]);

  return (
    <button
      title="Cart"
      onClick={handleShowCart}
      className="  border rounded-full p-1 border-black items-center text-center    relative"
    >
      {QuantityAllItems ? (
        <div
          className={`  ${
            isAnimate ? "animate-ping bg-green-500" : " bg-gray-600"
          } ease-in bg-gray-600 text-white w-[22px] h-[22px]  -top-2  -right-2 text-sm  text-center rounded-full absolute`}
        >
          {QuantityAllItems}
        </div>
      ) : (
        ""
      )}

      <div className="p-[2px]">
        <Cart />
      </div>
    </button>
  );
};

export default HeaderBasket;
