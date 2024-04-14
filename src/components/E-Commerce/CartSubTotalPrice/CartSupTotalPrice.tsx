import { TResponseProducts } from "@toolkit/common/types";

type Props = {
  product: TResponseProducts[];
};

const CartSupTotalPrice = ({ product }: Props) => {
  const supTotal = product.reduce((acc, el) => {
    const price = el.price;
    const quantity = el.quantity;

    if (quantity && typeof quantity === "number") {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);


  return (
    <>
      <dl className="space-y-0.5 text-sm text-gray-700">
        <div className="flex justify-between !text-base font-medium">
          <dt>Total</dt>
          <dd>${supTotal.toFixed(2)}</dd>
        </div>
      </dl>

    
    </>
  );
};

export default CartSupTotalPrice;
