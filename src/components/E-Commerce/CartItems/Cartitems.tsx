import { TResponseProducts } from "@customTypes";
import CartCheckout from "../CartCheckout/CartCheckout";
import CartSupTotalPrice from "../CartSubTotalPrice/CartSupTotalPrice";
import CartItemList from "../CartItemList/CartItemList";
import CartEmpty from "../CartItemList/CartEmpty";

type Props = {
  product: TResponseProducts[];
  changeQuantityHandler: (id: number, quantity: number) => void;
};

const Cartitems = ({ product, changeQuantityHandler }: Props) => {
  const productResult =
    product.length > 0 ? (
      product.map((item) => (
        <CartItemList
          key={item.id}
          {...item}
          changeQuantityHandler={changeQuantityHandler}
        />
      ))
    ) : (
      <CartEmpty />
    );
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {/* productResults */}
            <ul className="space-y-4">{productResult}</ul>
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <CartSupTotalPrice product={product} />
                <CartCheckout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cartitems;
