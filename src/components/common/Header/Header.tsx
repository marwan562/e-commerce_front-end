import { useState } from "react";
import Logo from "@assets/Svg/Logo.tsx";
import ShowMenu from "@componenets/common/Header/ShowMenu";
import ButtonMenu from "@componenets/common/Header/ButtonMenu";
import HeaderBasket from "@componenets/E-Commerce/HeaderBasket/HeaderBasket";
import { NavLink } from "react-router-dom";
import { handleActiveLogin, handleActiveRegister, handleStyleActive } from ".";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
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
              <ul className="flex items-center gap-6 text-sm">
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
            <HeaderBasket />
            <div className="sm:flex sm:gap-4">
              <NavLink to={"/login"} className={handleActiveLogin}>
                Login
              </NavLink>

              <div className="hidden sm:flex">
                <NavLink to={"/register"} className={handleActiveRegister}>
                  Register
                </NavLink>
              </div>
            </div>

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
