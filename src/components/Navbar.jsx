import React from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <nav className="py-7 px-12 flex justify-between">
        <div className="flex gap-16">
          <div className="w-28 flex overflow-hidden">
            <img src={logo} alt="logo" className="w-24" />
          </div>
          <div className="flex gap-4">
            <h2 className="flex items-center gap-2 to-zinc-900 font-semibold text-sm cursor-pointer">
              Explore <IoIosArrowDown />
            </h2>
            <h2 className="flex items-center gap-2 to-zinc-900 font-semibold text-sm cursor-pointer">
              Find Talent <IoIosArrowDown />
            </h2>
            <h2 className="flex items-center gap-2 to-zinc-900 font-semibold text-sm cursor-pointer">
              Get Hired <IoIosArrowDown />
            </h2>
            <h2 className="flex items-center gap-2 to-zinc-900 font-semibold text-sm cursor-pointer">
              Blog
            </h2>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="font-semibold text-sm">Sign up</button>
          <button className="py-3 px-6 font-semibold text-sm rounded-full bg-zinc-900 text-zinc-100">
            Log in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
