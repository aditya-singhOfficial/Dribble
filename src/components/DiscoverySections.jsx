import React from "react";
import DiscoverySectionLink from "./DiscoverySectionLink";
import ArtWorkCard from "./ArtWorkCard";

const DiscoverySections = () => {
  return (
    <>
      <DiscoverySectionLink />
      <div className="conatiner px-20 pr-30 mt-9 flex flex-wrap gap-5">
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
        <ArtWorkCard />
      </div>
    </>
  );
};

export default DiscoverySections;
