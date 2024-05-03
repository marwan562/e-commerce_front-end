import LottieHandler from "@componenets/feedback/LottieHandler/LottieHandler";
import CartInfo from "@componenets/E-Commerce/CartInfo/CartInfo";
import React, { ReactNode } from "react";
import { TStatus } from "@types";

type Props<T> = {
  records: T[];
  renderTotalPrice: (record: T[]) => React.ReactNode;
  CartCheckOrder?: React.ReactNode;
  renderItem: (record: T) => ReactNode;
  placeOrderStatus?: TStatus;
  modal?: boolean;
};

const CartGridList = <T extends { id: number }>({
  records,
  renderItem,
  renderTotalPrice,
  CartCheckOrder,
  placeOrderStatus,
  modal,
}: Props<T>) => {
  const productResult =
    records?.length > 0 ? (
      records.map((item) => (
        <CartInfo key={item.id} modal {...item}>
          {renderItem(item)}
        </CartInfo>
      ))
    ) : placeOrderStatus === "success" ? (
      <LottieHandler
        type="success"
        message={"Your order has been placed successfuly."}
      />
    ) : placeOrderStatus === "failed" ? (
      <LottieHandler
        type="error"
        message={"Error: Failed Order Try Latter ."}
      />
    ) : (
      <LottieHandler type="empty" message={"Your cart is empty."} />
    );
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {modal ? null : "Your cart"}
            </h1>
          </header>

          <div className="mt-8">
            {/* productResults */}
            <ul className="space-y-4">{productResult}</ul>
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                {modal ? null : renderTotalPrice(records)}
                {CartCheckOrder}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartGridList;
