import React from "react";
import DiscoverySectionLink from "./DiscoverySectionLink";
import ArtWorkCard from "./ArtWorkCard";

const DiscoverySections = ({ cardData, handleLike, handleSave }) => {
  return (
    <>
      <DiscoverySectionLink />
      <div className="w-full px-4 py-4 md:px-20 md:pr-30 mt-9 grid md:grid-cols-4 grid-cols-1 gap-8">
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
