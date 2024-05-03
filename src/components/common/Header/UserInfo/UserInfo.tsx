import { NavLink } from "react-router-dom";

type TProps = {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
  authLogoutHandler: () => void;
};

const UserInfo = ({ user, authLogoutHandler }: TProps) => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1 font-semibold">
        <span className="  text-[19px] font-medium "> Welcome:</span>{" "}
        {user?.first_name} {user?.last_name}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu space-y-2 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <NavLink to={"/profile"} end>Profile</NavLink>
        </li>
        <li>
          <NavLink to={"/profile/orders"}>Orders</NavLink>
        </li>
        <hr />
        <li onClick={authLogoutHandler}>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
