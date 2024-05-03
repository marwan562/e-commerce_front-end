import { TResponseProducts } from "@types";
import { ChangeEvent, memo } from "react";

type Props = {
  changeQuantityHandler?: (id: number, quantity: number) => void | undefined
};
const CartItemList = memo(
  ({ id, quantity, max, changeQuantityHandler }: TResponseProducts & Props) => {
    //render options list
    const renderOptions = Array(max)
      .fill(0)
      .map((_, inx) => {
        const quantity = ++inx;
        return (
          <option title="item" value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    // FC Change Quantity
    const changeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
      const quantity = +e.target.value;
      if (id && quantity) {
        changeQuantityHandler(id, quantity);
      }
    };

    return (
      <form>
        <label htmlFor="Line1Qty" className="sr-only">
          {" "}
          Quantity{" "}
        </label>
        <div className=" flex justify-center items-center gap-2">
          <div className=" font-semibold text-sm">Quantity:</div>
          <select
            defaultValue={quantity}
            onChange={changeQuantity}
            title="quantity"
            className="select select-sm w-ful w-[52px] max-w-xs"
          >
            {renderOptions}
          </select>
        </div>
      </form>
    );
  }
);

export default CartItemList;
