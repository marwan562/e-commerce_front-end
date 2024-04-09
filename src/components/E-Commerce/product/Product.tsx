import useGetProductsByPrefix from "@hooks/useGetProductsByPrefix";
import ProductList from "./ProductList";
import Loanding from "@componenets/feedback/Loading/Loanding";
import { GridList } from "@componenets/common";

const Product = () => {
  const { records, status, error } = useGetProductsByPrefix();

  return (
    <Loanding status={status} error={error}>
      <GridList
        records={records}
        status={status}
        renderItem={(record) => <ProductList {...record} />}
      />
    </Loanding>
  );
};

export default Product;
