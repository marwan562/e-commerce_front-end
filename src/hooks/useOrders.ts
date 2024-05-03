import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import actGetOrders from "@toolkit/orders/act/actGetOrders";
import actRemoveOrder from "@toolkit/orders/act/actRemoveOrder";
import { resetStatusAfterOrder } from "@toolkit/orders/ordersSlice";
import { TResponseProducts } from "@types";
import { useEffect, useState } from "react";

const useOrders = () => {
  const dispatch = useAppDispatch();
  const { orderList, error, status } = useAppSelector((state) => state.orders);

  const [showModal, setShowModal] = useState<"close" | "open">("close");
  const [selectProduct, setSelectProduct] = useState<TResponseProducts[]>([]);

  const viewDetailsHandler = (el: { id: number }) => {
    const productDetails = orderList.find((p) => p.id === el.id);
    const newItem = productDetails?.items ?? [];

    setShowModal("open");
    setSelectProduct((prev) => [...prev, ...newItem]);
  };

  const removeOrder = (id: number) => {
    dispatch(actRemoveOrder(id));
  };

  useEffect(() => {
    const promise = dispatch(actGetOrders());
    return () => {
      promise.abort();
      dispatch(resetStatusAfterOrder());
    };
  }, [dispatch]);
  return {
    error,
    removeOrder,
    status,
    showModal,
    setShowModal,
    selectProduct,
    setSelectProduct,
    orderList,
    viewDetailsHandler,
  };
};

export default useOrders;
