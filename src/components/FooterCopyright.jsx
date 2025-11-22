import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const FooterCopyright = () => {
  return (
    <>
      <div className="md:py-7 md:px-36 py-4 px-4 flex flex-wrap justify-center  md:justify-between items-center mt-8 mb-4 gap-2 md:gap-0">
        <div className="flex gap-2  md:gap-6">
          <h1 className="flex cursor-pointer text-sm md:text-sm text-zinc-500 gap-2 items-center">
            <FaRegCopyright />
            {new Date().getFullYear()} Dribble
          </h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Terms</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Privacy</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Cookies</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          <h1 className="text-sm cursor-pointer text-zinc-500">Jobs</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Designers</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Freelancers</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Tags</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Places</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Resources</h1>
        </div>
      </div>
    </>
  );
};

export default FooterCopyright;
