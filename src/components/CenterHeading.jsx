import React from "react";

const CenterHeading = () => {
  return (
    <>
      <div className="flex w-full items-center md:items-start flex-col gap-4 py-5">
        <h1 className="flex w-2/3 md:w-full md:text-left text-center flex-col text-4xl md:text-5xl font-semibold leading-none">
          <span>Discover the</span> World's Top Designers
        </h1>
        <p className="md:w-3/4 min-w-10/12 text-center md:text-left text-sm md:text-lg">
          Explore work from the most talented and accomplished designers ready
          to take on your next project
        </p>
      </div>
    </>
  );
};

export default CenterHeading;
