import { FaRegHeart } from "react-icons/fa";

const HeaderWishList = () => {
  return (
    <button title="Wishlist" className="  border rounded-full p-2 border-black items-center text-center    relative">
      <div
        className={`  
      ease-in bg-gray-600 text-white w-[22px] h-[22px]  -top-2  -right-2 text-sm  text-center rounded-full absolute`}
      >
        2
      </div>

      <div className="p-[2px]">
        <FaRegHeart color="black"  />
      </div>
    </button>
  );
};

export default HeaderWishList;
