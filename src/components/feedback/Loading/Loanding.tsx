import { TError, TStatus } from "@types";
import { ReactNode } from "react";
import ProductSkeleton from "../Skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeletons from "../Skeletons/CartSkeletons/CartSkeletons";
import CategoriesSkeletons from "../Skeletons/CategoriesSkeletons/CategoriesSkeletons";
import CartMenuSkeletons from "../Skeletons/CartMenu/CartMenuSkeletons";
import FailedError from "../FailedError/FailedError";

const skeletonsTypes = {
  product: ProductSkeleton,
  category: CategoriesSkeletons,
  cart: CartSkeletons,
  cartMenu: CartMenuSkeletons,
};

type Props = {
  children: ReactNode;
  status: TStatus;
  error: TError;
  Type: "product" | "category" | "cart" | "cartMenu";
};

const Loanding = ({ children, status, error, Type }: Props) => {
  const Componenet = skeletonsTypes[Type];
  return (
    <div className="   ">
      {status === "pending" ? (
        <Componenet />
      ) : status === "failed" ? (
        <FailedError error={error} />
      ) : (
        children
      )}
    </div>
  );
};

export default Loanding;
