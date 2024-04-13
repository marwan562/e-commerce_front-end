import useGetProductsByPrefix from "@hooks/useGetProductsByPrefix";
import ProductList from "./ProductList";
import Loanding from "@componenets/feedback/Loading/Loanding";
import { GridList } from "@componenets/common";
import { TResponseProducts } from "@toolkit/common/types";

const Product = () => {
  const { recordWithQuantity, status, error } = useGetProductsByPrefix();

  return (
    <Loanding status={status} error={error}>
      <GridList<TResponseProducts>
        records={recordWithQuantity}
        status={status}
        renderItem={(record) => <ProductList {...record} />}
      />
    </Loanding>
  );
};

export default Product;
