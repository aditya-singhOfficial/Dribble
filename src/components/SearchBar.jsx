import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchBar = ({ searchbarData }) => {
  return (
    <>
      {searchbarData.map((item) =>
        item.isVisible ? (
          <div className="w-10/12 mt-4 flex flex-col gap-4">
            <div className="rounded-full relative mt-4 bg-zinc-100">
              <input
                type="text"
                name="name"
                placeholder={item.placeholder}
                className="py-4 w-full h-full outline-none px-5 text-md"
              />
              <IoSearchSharp className="absolute right-2 bg-pink-500 text-white rounded-full py-2 top-2 text-4xl" />
            </div>
            <div className="flex w-full px-3 pr-8 items-center gap-3">
              <h1 className="text-xs font-semibold">Popular:</h1>
              <div className="flex gap-4   w-full">
                {item.tags.map((item) => (
                  <h1 className="border whitespace-nowrap cursor-pointer hover:bg-zinc-200 rounded-full px-3 text-zinc-600 text-xs font-semibold py-1">
                    {item}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )
      )}
    </>
  );
};

export default SearchBar;
