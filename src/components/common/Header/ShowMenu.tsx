import type { ShowMenu } from "./Types";

const ShowMenu = ({ setShowMenu, showMenu }: ShowMenu) => {
  return (
    <div className=" relative " onClick={() => setShowMenu(!showMenu)}>
      <div className=" absolute   right-[40px] top-[60px]  rounded-md w-[300px] h-[390px] shadow-lg shadow-gray-300 bg-gray-100">
        <div>
          <div className=" text-center mt-2 bg-gray-200 drop-shadow-xl p-3 text-2xl font-semibold">
            <h1>E-Commerce App</h1>
          </div>
          <div className=" container text-center   text-xl m-auto p-3">
            <a href={"/"} className=" active:bg-gray-500 menuBar">
              Home
            </a>
            <a className="menuBar" href={"#"}>
              Careers
            </a>
            <a className="menuBar" href={"#"}>
              Hishrry
            </a>
            <a className="menuBar" href={"#"}>
              Service
            </a>
            <a className="menuBar" href={"#"}>
              Projects
            </a>
            <a className="menuBar" href={"#"}>
              Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMenu;
