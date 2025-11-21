import React from "react";
import CenterHeading from "./CenterHeading";
import CenterSearchBar from "./CenterSearchBar";
import SearchBar from "./SearchBar";
import CenterVideo from "./CenterVideo";

const CenterContent = () => {
  return (
    <>
      <div className="container flex">
        <div className=" px-20">
          <CenterHeading />
          <CenterSearchBar />
          <SearchBar />
        </div>
        <CenterVideo/>
      </div>
    </>
  );
};

export default CenterContent;
