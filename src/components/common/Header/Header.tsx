import { useEffect, useState } from "react";
import Logo from "@assets/Svg/LogoSvg";
import ShowMenu from "@componenets/common/Header/smScreenMenu/ShowMenu";
import ButtonMenu from "@componenets/common/Header/smScreenMenu/ButtonMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleActiveLogin, handleActiveRegister, handleStyleActive } from ".";
import CartMenu from "./CartMenu/CartMenu";
import HeaderCounter from "./HeaderCounter/HeaderCounter";
import { getCartTotalQuantitySelector } from "@toolkit/Cart/selectors";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import Cart from "@assets/Svg/CartSvg";
import { FaRegHeart } from "react-icons/fa";
import { authLogout } from "@toolkit/Auth/authSlice";
import { actGetWishlist } from "@toolkit/Cart/wishlist/wishlistSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAppSelector((state) => state.auth);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(true);

  const navigate = useNavigate();
  const CartQuantityItems = useAppSelector(getCartTotalQuantitySelector);
  const WishlistQuantityItems = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  const authLogoutHandler = () => {
    dispatch(authLogout());
    navigate("login", { replace: true });
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("productId"));
    }
  }, [dispatch, accessToken]);
  return (
    <header className="bg-white drop-shadow-xl ">
      <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <NavLink to={"/"} className="block text-teal-600">
              <span className="sr-only">Home</span>
              <Logo />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex  items-center gap-6 text-sm">
                <li>
                  <NavLink to={"/"} className={handleStyleActive}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/about-us"} className={handleStyleActive}>
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/categories"} className={handleStyleActive}>
                    Categories
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/blog"} className={handleStyleActive}>
                    {" "}
                    Blog{" "}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4 ">
            {/* Wish List */}
            {accessToken && (
              <>
                <HeaderCounter
                  title="wishlist"
                  totalQuantityitems={WishlistQuantityItems}
                  SvgIcon={<FaRegHeart />}
                />
                {/* Space Line */}
                <div className=" text-3xl mb-[6px]">|</div>
                {/* Cart Menu */}
                <HeaderCounter
                  title="cart"
                  handleShowCart={handleShowCart}
                  totalQuantityitems={CartQuantityItems}
                  SvgIcon={<Cart />}
                />
              </>
            )}
            {!showCart && <CartMenu handleShowCart={handleShowCart} />}
            {/* Login */}
            {!accessToken ? (
              <div className="sm:flex sm:gap-4">
                <NavLink to={"/login"} className={handleActiveLogin}>
                  Login
                </NavLink>
                {/* register */}
                <div className="hidden sm:flex">
                  <NavLink to={"/register"} className={handleActiveRegister}>
                    Register
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 font-semibold"
                >
                  <span className="  text-[19px] font-medium "> Welcome:</span>{" "}
                  {user?.first_name} {user?.last_name}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/user/profile"}>Profile</Link>
                  </li>
                  <li>
                    <a>Orders</a>
                  </li>
                  <hr />
                  <li onClick={authLogoutHandler}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            )}

            <div className="block md:hidden ">
              {/* Menu Button */}
              {showMenu && (
                <ShowMenu setShowMenu={setShowMenu} showMenu={showMenu} />
              )}
              <ButtonMenu setShowMenu={setShowMenu} showMenu={showMenu} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
