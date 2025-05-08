import React, { useContext } from "react";
import iconImage from '../../assets/pay.avif';
import Profile from '../../Pages/MyProfile/MyProfile';
import { NavLink } from "react-router";
import { AuthContext } from "../../Pages/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const angkor = (
    <>
      <li className="font-bold"> 
        <NavLink
          to="/"
          className={({ isActive }) =>
            `m-6 ${isActive
              ? 'underline font-semibold'
              : 'text-[#0F0F0FB3]'
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold"> 
        <NavLink
          to={user ? "/history" : "/login"}
          className={({ isActive }) =>
            `m-6 ${isActive ? 'underline font-semibold' : 'text-[#0F0F0FB3]'}`
          }
        >
          My Bills
        </NavLink>

      </li>
      <li className="font-bold"> 
        <NavLink
          to="/userProfile"
          className={({ isActive }) =>
            `m-6 ${isActive
              ? 'underline font-semibold'
              : 'text-[#0F0F0FB3]'
            }`
          }
        >
          My Profile
        </NavLink>
      </li>

      <li className="font-bold"> 
        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            `m-6 ${isActive
              ? 'underline font-semibold'
              : 'text-[#0F0F0FB3]'
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-1 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {angkor}
          </ul>
        </div>
        <div className="hidden lg:flex  items-center  ">
          <img
            src={iconImage}
            className="h-[40px] w-[40px]  rounded-xl"
          />
          <a className="text-2xl font-bold ml-1">
            <span className="text-blue-600 font-bold text-xl hover:text-blue-800 transition duration-300">Pay</span>
            <span className="text-gray-800 font-bold text-xl hover:text-blue-800 transition duration-300">Bill</span>
          </a>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {angkor}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <Profile user={user} />
        ) : (
          <>
            <NavLink to="/login" className="btn btn-sm bg-blue-600 text-white mr-2">Login</NavLink>
            <NavLink to="/register" className="btn btn-sm bg-green-600 text-white">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;