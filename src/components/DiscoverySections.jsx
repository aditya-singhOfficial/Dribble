import React from "react";
import DiscoverySectionLink from "./DiscoverySectionLink";
import ArtWorkCard from "./ArtWorkCard";

const DiscoverySections = ({ cardData, handleLike, handleSave }) => {
  return (
    <>
      <DiscoverySectionLink />
      <div className="w-full px-20 pr-30 mt-9 flex justify-center flex-wrap gap-8">
        {cardData.map((item, index) => (
          <ArtWorkCard
            values={item}
            index={index}
            key={index}
            handleLike={handleLike}
            handleSave={handleSave}
          />
        ))}
      </div>
    </>
  );
};

export default DiscoverySections;
