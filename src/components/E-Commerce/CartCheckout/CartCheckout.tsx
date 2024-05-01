import { clearCartAferPlaceOrder } from "@toolkit/Cart/CartSlice";
import { useAppDispatch } from "@toolkit/hooks";
import actPlaceOrder from "@toolkit/orders/act/actPlaceOrder";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CartCheckout = () => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState<"open" | "close">("close");

  const orderHanlder = () => {
    setShowModal("close");
    //tost
    toast.promise(
      //dispatch order
      dispatch(actPlaceOrder(5))
        .unwrap()
        .then(() => dispatch(clearCartAferPlaceOrder())),
      {
        loading: "Loading...",
        success: <b>Your order Successfuly </b>,
        error: <b>Something error try again.</b>,
      }
    );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div onClick={() => setShowModal("open")} className="flex justify-end">
        <a
          href="#"
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Place Order
        </a>
      </div>
      {/* modal */}
      <dialog
        id="my_modal_5"
        className={`modal modal-${showModal} modal-bottom sm:modal-middle`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="  space-x-4">
                <button
                  onClick={() => setShowModal("close")}
                  className="btn btn-outline btn-error"
                >
                  Close
                </button>
                <button onClick={orderHanlder} className="btn  btn-outline">
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartCheckout;
