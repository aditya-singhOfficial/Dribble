import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
const DiscoverySectionLink = () => {
  return (
    <>
      <div className="conatiner px-20 pr-30 mt-9">
        <div className="flex w-full justify-between">
          <h1 className="rounded py-1 px-3 border flex gap-2 items-center cursor-pointer">
            Popular
            <IoIosArrowDown />
          </h1>
          <div className="flex w-3/5 items-center justify-between">
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Discover
            </h1>
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Animation
            </h1>
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Branding
            </h1>
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Illustration
            </h1>
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Mobile
            </h1>
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Print
            </h1>
            <h1 className="text-sm cursor-pointer hover:bg-zinc-100 rounded-full py-1 px-3">
              Product Design
            </h1>
          </div>
          <h1 className="rounded py-1 px-3 border flex gap-2 items-center cursor-pointer">
            <CgMenuLeft />
            Filters
          </h1>
        </div>
      </div>
    </>
  );
};

export default DiscoverySectionLink;
