import { GridList } from "@componenets/common";
import ProductList from "@componenets/E-Commerce/product/ProductList";
import Loanding from "@componenets/feedback/Loading/Loanding";
import useGetWishlist from "@hooks/useGetWishlist";
import { TResponseProducts } from "@customTypes";

const Wishlist = () => {
  const { record, error, status } = useGetWishlist();

  return (
    <div className="  container m-auto">
      <h2 className=" text-center text-3xl font-semibold  tracking-[1px]">
        Your Wishlist
      </h2>
      <br />
      <hr />
      <Loanding status={status} error={error}>
        <GridList<TResponseProducts>
          records={record}
          status={status}
          renderItem={(record) => <ProductList {...record} />}
        />
      </Loanding>
    </div>
  );
};

export default Wishlist;
