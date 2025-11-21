import React from "react";
import { BsStars } from "react-icons/bs";
const InstantSearch = () => {
  return (
    <>
      <div className="conatiner px-20 pr-30 mt-9 rounded">
        <div className="flex bg-zinc-100 gap-4 items-center p-4 rounded-md">
          <div className="flex gap-2 items-center py-2 px-5 bg-white rounded-full">
            <BsStars className="text-purple-600 text-lg" />
            <button className=" text-black font-semibold text-sm">
              Get Matched Now
            </button>
          </div>

          <p className="text-zinc-700 text-sm">
            Tell us what you need and instantly get matched with world-class
            talent ready to work on your project
          </p>
        </div>
      </div>
    </>
  );
};

export default InstantSearch;
