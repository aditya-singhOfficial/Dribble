import React from "react";
import CenterHeading from "./CenterHeading";
import CenterLink from "./CenterLink";
import SearchBar from "./SearchBar";
import CenterVideo from "./CenterVideo";

const CenterContent = () => {
  return (
    <>
      <div className="container flex">
        <div className=" px-20">
          <CenterHeading />
          <CenterLink />
          <SearchBar />
        </div>
        <CenterVideo/>
      </div>
    </>
  );
};

export default CenterContent;
