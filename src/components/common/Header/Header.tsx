import Logo from "@assets/Svg/LogoSvg";
import ShowMenu from "@componenets/common/Header/smScreenMenu/ShowMenu";
import ButtonMenu from "@componenets/common/Header/smScreenMenu/ButtonMenu";
import { NavLink } from "react-router-dom";
import { handleActiveLogin, handleActiveRegister, handleStyleActive } from ".";
// import CartMenu from "./CartMenu/CartMenu";
import HeaderCounter from "./HeaderCounter/HeaderCounter";
import Cart from "@assets/Svg/CartSvg";
import { FaRegHeart } from "react-icons/fa";
import useHeader from "@hooks/useHeader";
import UserInfo from "./UserInfo/UserInfo";

const Header = () => {
  const {
    accessToken,
    WishlistQuantityItems,
    handleShowCart,
    CartQuantityItems,
    // showCart,
    user,
    authLogoutHandler,
    showMenu,
    setShowMenu,
  } = useHeader();

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
                  navigated="/wishlist"
                />
                {/* Space Line */}
                <div className=" text-3xl mb-[6px]">|</div>
                {/* Cart Menu */}
                <HeaderCounter
                  title="cart"
                  navigated="/cart"
                  handleShowCart={handleShowCart}
                  totalQuantityitems={CartQuantityItems}
                  SvgIcon={<Cart />}
                />
              </>
            )}
            {/* {!showCart && <CartMenu handleShowCart={handleShowCart} />} */}
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
              <UserInfo authLogoutHandler={authLogoutHandler} user={user} />
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
