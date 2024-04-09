import { useAppSelector } from "@toolkit/hooks";


const useGetTotalQuantity = () => {
    const { items } = useAppSelector((state) => state.cart);

    const QuantityAllItems = Object.values(items).reduce(
        (acc, item) => acc + item,
        0
      );
  return {QuantityAllItems}
  
}

export default useGetTotalQuantity