import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const ArtWorkCard = () => {
  return (
    <>
      <div className="mb-4">
        <div className="h-52 rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1763386840769-8484a2a02442?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between px-1 pr-2">
          <div className="flex gap-2 items-center mt-2">
            <p>Nixtio</p>
            <p className="uppercase text-xs bg-zinc-300 p-1 rounded-md font-semibold text-white text-[9px]">
              team
            </p>
          </div>
          <div className="flex gap-4 mt-1">
            <p className="flex items-center gap-0.5">
              <CiHeart />
              199
            </p>
            <p className="flex items-center gap-0.5">
              <FaEye />
              4.7k
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtWorkCard;
