import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import "../scrollBar.css";
const DiscoverySectionLink = () => {
  return (
    <>
      <div className="w-full px-4 py-4 md:px-20 md:pr-30 mt-9">
        <div className="flex w-full justify-between">
          <h1 className="rounded text-xs md:text-lg py-0.5 md:py-1 px-1.5 md:px-3 border flex gap-1 md:gap-2 items-center cursor-pointer">
            Popular
            <IoIosArrowDown />
          </h1>
          <div className="flex w-1/2 items-center justify-between overflow-auto no-scrollbar">
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Discover
            </h1>
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Animation
            </h1>
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Branding
            </h1>
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Illustration
            </h1>
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Mobile
            </h1>
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Print
            </h1>
            <h1 className="text-xs whitespace-nowrap md:text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Product Design
            </h1>
          </div>
          <h1 className="rounded text-xs md:text-lg py-0.5 md:py-1 px-1.5 md:px-3 border flex gap-1 md:gap-2 items-center cursor-pointer">
            <CgMenuLeft />
            Filters
          </h1>
        </div>
      </div>
    </>
  );
};

export default DiscoverySectionLink;
