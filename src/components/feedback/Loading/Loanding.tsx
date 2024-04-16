import { TError, TStatus } from "@types";
import { ReactNode } from "react";
import ProductSkeleton from "../Skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeletons from "../Skeletons/CartSkeletons/CartSkeletons";
import CategoriesSkeletons from "../Skeletons/CategoriesSkeletons/CategoriesSkeletons";

const skeletonsTypes = {
  product: ProductSkeleton,
  category: CategoriesSkeletons,
  cart: CartSkeletons,
};

type Props = {
  children: ReactNode;
  status: TStatus;
  error: TError;
  Type: "product" | "category" | "cart";
};

const Loanding = ({ children, status, error, Type }: Props) => {
  const Componenet = skeletonsTypes[Type];
  return (
    <div className="   ">
      {status === "pending" ? (
        <Componenet />
      ) : status === "failed" ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current  shrink-0 h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! {error}.</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loanding;
