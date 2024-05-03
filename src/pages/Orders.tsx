import CartGridList from "@componenets/common/GridList/CartGridList";
import { CartItemList } from "@componenets/E-Commerce";
import Loanding from "@componenets/feedback/Loading/Loanding";
import LottieHandler from "@componenets/feedback/LottieHandler/LottieHandler";
import useOrders from "@hooks/useOrders";

const headTable = ["Order Number", "Items", "Total Price", "Edit"];

const Orders = () => {
  const {
    error,
    status,
    showModal,
    setShowModal,
    selectProduct,
    setSelectProduct,
    orderList,
    viewDetailsHandler,
    removeOrder,
  } = useOrders();

  return (
    <>
      <Loanding Type="cart" error={error} status={status}>
        <dialog
          id="my_modal_5"
          className={`modal  modal-${showModal}  sm:modal-middle mt-8`}
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Details Product</h3>
            <div className="py-9">
              <CartGridList
                modal
                records={selectProduct}
                renderItem={(item) => <CartItemList key={item.id} {...item} />}
              />
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                {/* if there is a button in form, it will close the modal */}
                <div className="  space-x-4">
                  <button
                    onClick={() => {
                      setShowModal("close");
                      setSelectProduct([]);
                    }}
                    className="btn  btn-outline"
                  >
                    Close{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        <table className=" max-w-full rounded-t-md w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headTable.map((head) => (
                <th
                  key={head}
                  className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 ? (
              orderList?.map((el, inx) => {
                const classes = ` text-center  p-5`;
                return (
                  <>
                    <tr key={el.id} className="mb-5 border-b-1">
                      <td className={classes}>#{++inx}</td>
                      <td className={`${classes} `}>
                        {el?.items?.length} /{" "}
                        <span
                          onClick={() => viewDetailsHandler(el)}
                          className="underline cursor-pointer"
                        >
                          Product Details
                        </span>
                      </td>
                      <td className={classes}>$ {el?.supTotal?.toFixed(2)}</td>
                      <td className={classes}>
                        <button
                          onClick={() => removeOrder(el.id)}
                          className=" btn btn-error btn-outline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <LottieHandler type="empty" message={"You dont have orders "} />
            )}
          </tbody>
        </table>
      </Loanding>
    </>
  );
};

export default Orders;
