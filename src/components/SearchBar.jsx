import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchBar = () => {
  return (
    <>
      <div className="w-10/12 mt-4 flex flex-col gap-4">
        <div className="rounded-full relative mt-4 bg-zinc-100">
          <input
            type="text"
            name="name"
            placeholder="What type of design are you interested in?"
            className="py-4 w-full h-full outline-none px-5 text-md"
          />
          <IoSearchSharp className="absolute right-2 bg-pink-500 text-white rounded-full py-2 top-2 text-4xl" />
        </div>
        <div className="flex w-full px-3 pr-8 items-center gap-3">
          <h1 className="text-xs font-semibold">Popular:</h1>
          <div className="flex justify-between w-full">
            <h1 className="border rounded-full px-3 text-zinc-600 text-xs font-semibold py-1">
              dashboard
            </h1>
            <h1 className="border rounded-full px-3 text-zinc-600 text-xs font-semibold py-1">
              landing
            </h1>
            <h1 className="border rounded-full px-3 text-zinc-600 text-xs font-semibold py-1">
              e-commerce
            </h1>
            <h1 className="border rounded-full px-3 text-zinc-600 text-xs font-semibold py-1">
              logo
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
