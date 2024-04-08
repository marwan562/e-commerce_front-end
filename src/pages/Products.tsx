import { Product } from "@componenets/E-Commerce";

const Products = () => {
  return (
    <div className="  mb-6  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 sm:px-3 gap-[40px]">
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Products;
