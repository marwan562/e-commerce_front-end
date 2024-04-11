import Cart from "@assets/Svg/Cart";
import { getCartTotalQuantitySelector } from "@toolkit/Cart/selectors";
import { useAppSelector } from "@toolkit/hooks";
const HeaderBasket = () => {
  const QuantityAllItems = useAppSelector(getCartTotalQuantitySelector);

  return (
    <button className="  border rounded-full p-1 border-black items-center text-center    relative">
      <div className=" bg-gray-600 text-white w-[22px] h-[22px]  -top-2  -right-2 text-sm  text-center rounded-full absolute">
        {QuantityAllItems}
      </div>

      <div className="p-[2px]">
        <Cart />
      </div>
    </button>
  );
};

export default HeaderBasket;
