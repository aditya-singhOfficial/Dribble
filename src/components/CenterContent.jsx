import React from "react";
import CenterHeading from "./CenterHeading";
import CenterLink from "./CenterLink";
import SearchBar from "./SearchBar";
import CenterVideo from "./CenterVideo";

const CenterContent = ({ searchbarData, handleSearchBarData }) => {
  return (
    <>
      <div className="container w-full flex flex-col md:flex-row">
        <div className="px-4 w-full md:w-1/2 md:px-20">
          <CenterHeading />
          <CenterLink
            searchbarData={searchbarData}
            handleSearchBarData={handleSearchBarData}
          />
          <SearchBar searchbarData={searchbarData} />
        </div>
        <CenterVideo />
      </div>
    </>
  );
};

export default CenterContent;
