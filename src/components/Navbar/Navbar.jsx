import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  console.log(user)
  return (
    <div className="bg-[#3b4252] py-5 ">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center text-white">
        <h1 className="text-3xl font-extrabold">PlayPulse Events</h1>
        <ul className="flex gap-5 my-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-red-400 rounded-lg px-3 py-1"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-red-400 rounded-lg px-3 py-1"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-red-400 rounded-lg px-3 py-1"
                  : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            {user && (
              <NavLink
                to="/events"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-red-400 rounded-lg px-3 py-1"
                    : ""
                }
              >
                Events
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <NavLink
                to="/features"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-red-400 rounded-lg px-3 py-1"
                    : ""
                }
              >
                Features
              </NavLink>
            )}
          </li>
        </ul>
        {user && 
        <div className="flex items-center gap-6">
          <img src={user.photoURL} className="w-12 rounded-full" alt="" />
          <h2>{user.displayName}</h2>
          </div>}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-red-400 border-none text-white hover:text-black w-full md:w-28"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-red-400 border-none text-white hover:text-black w-full md:w-28"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
