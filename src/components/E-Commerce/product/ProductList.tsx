import { addToCart } from "@toolkit/Cart/CartSlice";
import { TResponseProducts } from "@toolkit/common/types";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import toast, { Toaster } from "react-hot-toast";
import ButtonsQuantity from "./ButtonsQuantity";
import { memo } from "react";
import WishListSvg from "@assets/Svg/WishListSvg";

const ProductList = memo(
  ({ id, title, price, img, max }: TResponseProducts) => {
    const { items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const quantity = items[id] || 0;

    const QuantityResidual = max - (quantity ?? 0);

    const addToCartHandler = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      dispatch(addToCart(id));
      toast.success("Add To Cart Successfully!");
    };

    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="group relative block overflow-hidden">
          {img ? (
            <div className=" h-64 w-full   ">
              <img
                loading="lazy"
                src={img}
                alt={title}
                className=" h-64 w-full object-cover z-10 transition duration-500 group-hover:scale-105 sm:h-72"
              />
            </div>
          ) : (
            <div className="h-64 w-full animate-pulse bg-gray-200 "></div>
          )}

          <div className="relative border border-gray-100 bg-white p-6">
            <span className="whitespace-nowrap bg-gray-400 px-3 py-1.5 text-xs font-medium">
              {" "}
              New{" "}
            </span>
            {/* wishlist */}
            <div className=" ">
              <button className="absolute end-4 top-4  bg-gray-300  rounded-full  p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <WishListSvg />
              </button>
            </div>
            <h3
              title={title}
              className="mt-4 text-lg font-medium text-gray-900"
            >
              {title}
            </h3>

            <p className="">
              <b>Price: </b>
              <span className="mt-1.5 text-sm text-gray-700">${price}</span>
            </p>

            <p>
              <b> Residual: </b>
              {QuantityResidual <= 0 ? (
                <s className=" text-sm text-gray-500">You reach to the limit</s>
              ) : (
                QuantityResidual
              )}
            </p>

            <form className="mt-4">
              {!quantity ? (
                <button
                  onClick={addToCartHandler}
                  className="block w-full rounded bg-gray-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                  Add to Cart
                </button>
              ) : (
                <ButtonsQuantity
                  QuantityResidual={QuantityResidual}
                  id={id}
                  quantity={quantity}
                />
              )}
            </form>
          </div>
        </div>
      </>
    );
  }
);

export default ProductList;
