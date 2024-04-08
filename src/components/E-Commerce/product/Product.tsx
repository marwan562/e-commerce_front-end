import useGetProductsByPrefix from "@hooks/useGetProductsByPrefix";
import ProductList from "./ProductList";

const Product = () => {
  const { records, status, error } = useGetProductsByPrefix();

  let recordsProducts;

  if (status === "pending") return (recordsProducts = <p>loading</p>);
  //Success
  if (status === "success") {
    recordsProducts =
      records.length > 0 ? (
        records.map((record) => <ProductList key={record.id} {...record} />)
      ) : (
        <p>No Products</p>
      );
  }
  //Failed
  if (status === "failed") return (recordsProducts = <p>{error.message}</p>);

  return (
    <div className=" mb-6  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 sm:px-3 gap-[40px]">
      {recordsProducts}
    </div>
  );
};

export default Product;
