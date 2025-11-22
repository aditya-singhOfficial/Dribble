import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="py-4 px-4 lg:py-7 lg:px-12 flex justify-between">
        <div className="flex items-center gap-2 md:gap-16">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={20} /> : <RiMenu3Line size={20} />}
          </button>
          <div className="w-24 md:w-28 flex overflow-hidden">
            <img src={logo} alt="logo" className="w-20 md:w-24" />
          </div>
          <div className="hidden md:flex gap-4">
            <h2 className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Explore <IoIosArrowDown />
            </h2>
            <h2 className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Find Talent <IoIosArrowDown />
            </h2>
            <h2 className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Get Hired <IoIosArrowDown />
            </h2>
            <h2 className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Blog
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="font-semibold cursor-pointer text-xs sm:text-sm">
            Sign up
          </button>
          <button className="py-2 px-4 sm:py-3 sm:px-6 cursor-pointer font-semibold text-xs sm:text-sm rounded-full bg-zinc-900 text-zinc-100">
            Log in
          </button>
        </div>
        {isOpen && (
          <div className="fixed w-full h-screen bg-white z-50 flex flex-col gap-6 md:hidden">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdClose size={20} /> : <RiMenu3Line size={20} />}
            </button>
            <button className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Explore <IoIosArrowDown />
            </button>
            <button className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Find Talent <IoIosArrowDown />
            </button>
            <button className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Get Hired <IoIosArrowDown />
            </button>
            <button className="flex items-center gap-2 text-zinc-900 font-semibold text-sm cursor-pointer">
              Blog
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
