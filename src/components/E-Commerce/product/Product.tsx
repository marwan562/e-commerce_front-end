import useGetProductsByPrefix from "@hooks/useGetProductsByPrefix";
import ProductList from "./ProductList";
import Loanding from "@componenets/feedback/Loading/Loanding";
import { GridList } from "@componenets/common";
import { TResponseProducts } from "@types";

const Product = () => {
  const { productsFullInfo, status, error } = useGetProductsByPrefix();
  return (
    <Loanding Type="product" status={status} error={error}>
      <GridList<TResponseProducts>
        emptyMessage="There are no products available"
        records={productsFullInfo}
        status={status}
        renderItem={(record) => <ProductList {...record} />}
      />
    </Loanding>
  );
};

export default Product;
