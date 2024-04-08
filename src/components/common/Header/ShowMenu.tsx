import { NavLink } from "react-router-dom";
import type { ShowMenu } from "./Types";
import { handleAciveShowMenu } from ".";

const ShowMenu = ({ setShowMenu, showMenu }: ShowMenu) => {
  return (
    <section className=" relative      " onClick={() => setShowMenu(!showMenu)}>
      <div className=" absolute   right-[40px] top-[60px]  rounded-md w-[300px] shadow-lg shadow-gray-300 bg-gray-100">
        <div>
          <div className=" text-center mt-2 bg-gray-200 drop-shadow-xl p-3 text-2xl font-semibold">
            <h1>E-Commerce App</h1>
          </div>
          <div className=" container text-center   text-xl m-auto p-3">
            <NavLink to={"/"} className={handleAciveShowMenu}>
              Home
            </NavLink>
            <NavLink className={handleAciveShowMenu} to={"/about-us"}>
              About Us
            </NavLink>
            <NavLink className={handleAciveShowMenu} to={"/categories"}>
              Categories
            </NavLink>
            <NavLink className={handleAciveShowMenu} to={"/blog"}>
              Blogs
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowMenu;
