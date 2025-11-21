import React from "react";
import logo from "../assets/logo.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const FooterLinks = () => {
  return (
    <>
      <div className="py-7 px-36 flex justify-between items-center mt-8">
        <img src={logo} alt="#" className="w-24 cursor-pointer" />
        <div className="w-2/3 flex items-center justify-between">
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            For designer
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            Hire talent
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            Inspiration
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            Advertising
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            Blog
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            About
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            Carrers
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            Support
          </h1>
          <h1 className="text-sm font-semibold leading-tight cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
            For designer
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <FaTwitter className="text-xl cursor-pointer" />
          <FaSquareFacebook className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <FaPinterest className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
