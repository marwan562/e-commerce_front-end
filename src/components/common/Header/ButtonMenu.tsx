import type { ShowMenu } from "./Types";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ButtonMenu = ({ setShowMenu, showMenu }: ShowMenu) => {
  return (
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
    >
      {showMenu ? <IoMdClose color="black" /> : <CiMenuFries color="black" />}
    </button>
  );
};

export default ButtonMenu;
