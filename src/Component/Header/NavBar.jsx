import React from "react";
import iconImage from '../../assets/pay.png';
import { NavLink } from "react-router";

const Navbar = () => {
  const angkor = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `m-6 ${
              isActive
                ? 'underline font-semibold'
                : 'text-[#0F0F0FB3]'
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `m-6 ${
              isActive
                ? 'underline font-semibold'
                : 'text-[#0F0F0FB3]'
            }`
          }
        >
          My Bills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Regis"
          className={({ isActive }) =>
            `m-6 ${
              isActive
                ? 'underline font-semibold'
                : 'text-[#0F0F0FB3]'
            }`
          }
        >
          My profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            `m-6 ${
              isActive
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
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {angkor}
          </ul>
        </div>
        <div className="hidden lg:flex  items-center  ">
  <img 
    src={iconImage}
    className="h-[40px] w-[40px] ml-[50px] rounded-xl"
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
      <div className="navbar-end gap-1 mr-[50px] ">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
  Login
</button>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out ml-2">
  Register
</button>

      </div>
    </div>
  );
};

export default Navbar;