import React from "react";
import { BsStars } from "react-icons/bs";
const InstantSearch = () => {
  return (
    <>
      <div className="w-full px-4 py-4 md:px-20 md:pr-30 mt-9 rounded">
        <div className="flex flex-col md:flex-row w-full bg-zinc-100 gap-2 md:gap-4 items-start md:items-center p-4 rounded-md">
          <div className="flex gap-2 whitespace-nowrap items-center py-3 px-5 bg-white rounded-full">
            <BsStars className="text-purple-600 text-lg" />
            <button className=" text-black font-semibold text-sm">
              Get Matched Now
            </button>
          </div>

          <p className="text-zinc-700 text-sm">
            Tell us what you need and instantly get matched with world-class
            talent.
          </p>
        </div>
      </div>
    </>
  );
};

export default InstantSearch;
