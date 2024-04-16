import { TError, TStatus } from "@types";
import { ReactNode } from "react";
import ProductSkeleton from "../Skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeletons from "../Skeletons/CartSkeletons/CartSkeletons";
import CategoriesSkeletons from "../Skeletons/CategoriesSkeletons/CategoriesSkeletons";
import CartMenuSkeletons from "../Skeletons/CartMenu/CartMenuSkeletons";
import LottieHandler from "../LottieHandler/LottieHandler";

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
  Type: keyof typeof skeletonsTypes;
};

const Loanding = ({ children, status, error, Type = "category" }: Props) => {
  const Componenet = skeletonsTypes[Type];
  return (
    <div className="   ">
      {status === "pending" ? (
        <Componenet />
      ) : status === "failed" ? (
        <LottieHandler type="error" message={`Error: ${error}...!`} />
      ) : (
        children
      )}
    </div>
  );
};

export default Loanding;
