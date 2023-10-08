import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#3b4252] py-5 ">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center text-white">
      <h1 className="text-3xl font-extrabold">PlayPulse Events</h1>
      <ul className="flex gap-5 my-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-white bg-red-400 rounded-lg px-3 py-1" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-white bg-red-400 rounded-lg px-3 py-1" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="/login" className="btn bg-red-400 border-none text-white hover:text-black">
        Login
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
