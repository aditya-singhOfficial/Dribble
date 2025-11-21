import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const FooterCopyright = () => {
  return (
    <>
      <div className="py-7 px-36 flex justify-between items-center mt-8 mb-4">
        <div className="flex gap-6">
          <h1 className="flex cursor-pointer text-sm text-zinc-500 gap-2 items-center">
            <FaRegCopyright />
            {new Date().getFullYear()} Dribble
          </h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Terms</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Privacy</h1>
          <h1 className="text-sm cursor-pointer text-zinc-500">Cookies</h1>
        </div>
        <div className="flex gap-6">
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
