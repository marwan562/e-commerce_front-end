import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="container m-auto  ">
      <h2 className=" text-center text-3xl mb-2 font-semibold">Profile </h2>
      <hr />

      <div className="  flex justify-between">
        <ul
          tabIndex={0}
          className=" z-[1] menu space-y-2 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink to={"/profile"} end>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile/orders"}>Orders</NavLink>
          </li>
          <hr />
          <li>
            <a>Logout</a>
          </li>
        </ul>
        <div className=" w-full mt-5 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
