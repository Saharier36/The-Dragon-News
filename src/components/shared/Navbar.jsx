import Image from "next/image";
import React from "react";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/about-us">About</NavLink>
      </li>
      <li>
        <NavLink href="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 text-[#706F6F] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-[#403F3F]">
          The Dragon News
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#706F6F] px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="w-10 rounded-full">
          <Image width={40} height={40} alt="User Avatar" src={userAvatar} />
        </div>
        <Link
          href="/login"
          className="btn bg-[#403F3F] text-white hover:bg-[#353333] rounded-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
