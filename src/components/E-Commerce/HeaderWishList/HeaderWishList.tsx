import { useAppSelector } from "@toolkit/hooks";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderWishList = () => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const { itemsId } = useAppSelector((state) => state.wishlist);

  const navigate = useNavigate()

  useEffect(() => {
    if (!itemsId) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [itemsId]);

  return (
    <button
    onClick={() => navigate('/wishlist')}
      title="Wishlist"
      className="  border rounded-full p-2 border-black items-center text-center    relative"
    >
      {itemsId.length > 0 && (
        <div
          className={`  ${
            isAnimate ? "animate-ping bg-red-500" : " bg-gray-600"
          } ease-in bg-gray-600 text-white w-[22px] h-[22px]  -top-2  -right-2 text-sm  text-center rounded-full absolute`}
        >
          {itemsId.length}
        </div>
      )}

      <div className="p-[2px]">
        <FaRegHeart color="black" />
      </div>
    </button>
  );
};

export default HeaderWishList;
