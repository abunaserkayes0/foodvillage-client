import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const navbar = (
    <>
      <li>
        <Link className="text-lg font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg font-bold" to="/about">
          About
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link className="text-lg font-bold" to="/myService">
              My Service
            </Link>
          </li>
          <li>
            <Link className="text-lg font-bold" to="/viewServices">
              View Services
            </Link>
          </li>
        </>
      )}
      <li>
        <Link className="text-lg font-bold" to="/blog">
          Blog
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={logOut} className="text-lg font-bold" to="/login">
              LogOut
            </Link>
          </li>
          <li className="text-white flex items-center justify-center">
            {user?.photoURL ? (
              <span className="w-20 h-20 items-center justify-center">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="rounded-full"
                />
              </span>
            ) : (
              <span className="bg-red-500 font-bold mx-3 w-10 h-10 items-center justify-center rounded-full ">
                {user?.displayName?.charAt(0)?.toUpperCase() +
                  user?.displayName?.charAt(1)?.toUpperCase()}
              </span>
            )}
          </li>
        </>
      ) : (
        <li>
          <Link className="text-lg font-bold" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <Link className="font-black text-3xl" to="/">
          FoodVillage
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn text-[12px] md:text-xl bg-white border-1 border-red-600 rounded-md text-red-600 hover:bg-red-500 hover:text-white">
          Appointment
        </Link>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  p-2 shadow"
          >
            {navbar}
          </ul>
        </div>
      </div>
    </div>
  );
}
