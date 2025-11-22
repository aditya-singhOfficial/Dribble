import React from "react";
import "../scrollBar.css";
import { IoSearchSharp } from "react-icons/io5";
const SearchBar = ({ searchbarData }) => {
  return (
    <>
      {searchbarData.map((item, index) =>
        item.isVisible ? (
          <div
            key={index}
            className="w-full md:w-10/12 mt-4 flex flex-col gap-4"
          >
            <div className="rounded-full w-full relative mt-4 bg-zinc-100">
              <input
                type="text"
                name="name"
                placeholder={item.placeholder}
                className="w-full h-full outline-none px-5 py-3 md:py-4  text-sm md:text-md"
              />
              <IoSearchSharp className="absolute right-1 bg-pink-500 text-white rounded-full py-2 top-1 text-4xl" />
            </div>
            <div className="flex w-full px-3 md:pr-8 items-center gap-3">
              <h1 className="text-xs font-semibold">Popular:</h1>
              <div className="no-scrollbar flex md:gap-4 gap-2 overflow-x-auto w-full">
                {item.tags.map((item, index) => (
                  <h1
                    key={index}
                    className="border whitespace-nowrap cursor-pointer hover:bg-zinc-200 rounded-full px-3 text-zinc-600 text-xs font-semibold py-1"
                  >
                    {item}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default SearchBar;
