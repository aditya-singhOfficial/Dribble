import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const ArtWorkCard = ({ values, index, handleLike, handleSave }) => {
  return (
    <>
      <div className="mb-4 ">
        <div className="h-52 rounded-md overflow-hidden group  relative">
          <img src={values.image} className="w-full h-full object-cover" />
          <div
            className="absolute  flex justify-between items-center pl-2 pr-4 w-full h-[40%] bg-[#00000051] bottom-0 left-0 opacity-0 group-hover:opacity-100 
            translate-y-4 group-hover:translate-y-0
            transition-all duration-300 ease-in-out"
          >
            <h1 className="text-white text-xl ">{values.title}</h1>
            <div className="flex gap-4">
              <button
                className="cursor-pointer"
                onClick={() => {
                  handleSave(index);
                }}
              >
                <CiBookmark
                  className={`text-black font-semibold text-4xl ${
                    values.isSaved ? ["bg-black","text-white","border-none"].join(" ") : "bg-zinc-200"
                  } rounded-full border p-2`}
                />
              </button>

              <button
                className="cursor-pointer"
                onClick={() => {
                  handleLike(index);
                }}
              >
                <FaRegHeart
                  className={`text-black text-4xl ${
                    values.isLiked
                      ? ["bg-red-900", "text-white", "border-none"].join(" ")
                      : "bg-zinc-200"
                  } rounded-full border p-2`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-1 pr-2">
          <div className="flex gap-2 items-center mt-2">
            <p>{values.author}</p>
            <p className="uppercase text-xs bg-zinc-300 p-1 rounded-md font-semibold text-white text-[9px]">
              {values.isPro ? "Pro" : "team"}
            </p>
          </div>
          <div className="flex gap-4 mt-1">
            <p className="flex items-center gap-0.5">
              <CiHeart />
              {values.likes}
            </p>
            <p className="flex items-center gap-1.5">
              <FaEye />
              {values.views}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtWorkCard;
