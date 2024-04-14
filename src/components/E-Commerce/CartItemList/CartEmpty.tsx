import {  useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div className="  text-center text-gray-500 justify-center items-center text-3xl">
      <h2>CartEmpty...!!!</h2>

      <p>Sellect product</p>
      <button
        onClick={() => navigate("/categories")}
        className=" bg-slate-600 p-2 rounded-md mt-3 hover:bg-gray-400 transition-all duration-200"
      >
        Go
      </button>
    </div>
  );
};

export default CartEmpty;
