import { Product } from "@componenets/E-Commerce";
import { useParams } from "react-router-dom";

const Products = () => {
  const { prefix } = useParams();
  return (
    <div className=" ">
      <h1 className=" text-4xl text-center font-medium ">
        Prodcts about:<span className=" text-4xl"> {prefix}</span>
      </h1>
      <br />
      <hr className="mb-3" />
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Products;
