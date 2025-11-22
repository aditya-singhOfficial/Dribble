import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
const CenterLink = ({ searchbarData, handleSearchBarData }) => {
  return (
    <>
      <div className="w-3/5 mt-5 flex justify-between">
      {searchbarData.map((item,index)=>(
        <button
          onClick={() => handleSearchBarData(index)}
          className={`flex gap-2 cursor-pointer items-center  py-2 px-5   rounded-full ${item.isActive ?["bg-zinc-900","text-white"].join(" "):[]}`}
        >
          {index === 0 ?<GrGallery />:""}
          {index === 1 ?<IoPersonSharp />:""}
          {index === 2 ?<GrNotes />:""}
          {item.btnName}
        </button>
      ))}
      </div>
    </>
  );
};

export default CenterLink;
