import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
const CenterLink = () => {
  return (
    <>
      <div className="w-1/2 mt-5 flex justify-between">
        <NavLink
          className={`flex gap-2 items-center bg-zinc-900 py-2 px-5 text-white  rounded-full`}
          to={"/"}
        >
          <GrGallery />
          Shots
        </NavLink>
        <NavLink className={`flex gap-2 items-center`} to={"/"}>
          <IoPersonSharp />
          Designers
        </NavLink>
        <NavLink className={`flex gap-2 items-center`} to={"/"}>
          <GrNotes />
          Services
        </NavLink>
      </div>
    </>
  );
};

export default CenterLink;
