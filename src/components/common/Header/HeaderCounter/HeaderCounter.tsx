import { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  handleShowCart?: (() => void) | undefined;
  totalQuantityitems: number;
  SvgIcon: ReactNode;
  title: string;
  navigated: string;
};

const HeaderCounter = ({
  handleShowCart,
  totalQuantityitems,
  SvgIcon,
  title,
  navigated,
}: Props) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const navigate = useNavigate();
  //handle onclick wishlist
  const handleWishlist = () => {
    navigate(navigated);
  };

  const handleOnClick = title === "wishlist" ? handleWishlist : handleShowCart; //handle onclick cart

  const styleButton = title === "wishlist" ? "p-2" : "p-1";

  useEffect(() => {
    if (!totalQuantityitems) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantityitems]);

  return (
    <button
      title={title}
      onClick={handleOnClick}
      className={`  border rounded-full  border-black items-center text-center    relative ${styleButton}`}
    >
      {totalQuantityitems ? (
        <div
          className={`  ${
            isAnimate ? "animate-ping bg-green-500" : " bg-gray-600"
          } ease-in bg-gray-600 text-white w-[22px] h-[22px]  -top-2  -right-2 text-sm  text-center rounded-full absolute`}
        >
          {totalQuantityitems}
        </div>
      ) : (
        ""
      )}

      <div className="p-[2px]">{SvgIcon}</div>
    </button>
  );
};

export default HeaderCounter;
