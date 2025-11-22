import React from "react";
import "../animationScroll.css";
const ScrollbaleCard = ({ categoryData }) => {
  return (
    <>
      <div
        id="mainScroll"
        className="w-full cursor-pointer h-fit px-2 mt-8 flex overflow-hidden"
      >
        <div className={`scrollDiv flex justify-around  shrink-0`}>
          {categoryData.map((item,index) => (
            <div key={index} className="w-1/6">
              <div className="w-full h-32 md:h-44 rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-2">{item.title}</h1>
            </div>
          ))}
        </div>
        <div className={`scrollDiv flex justify-around  shrink-0`}>
          {categoryData.map((item,index) => (
            <div key={index} className="w-1/6">
              <div className="w-full h-32 md:h-44 rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-2">{item.title}</h1>
            </div>
          ))}
        </div>
        <div className={`scrollDiv flex justify-around  shrink-0`}>
          {categoryData.map((item,index) => (
            <div key={index} className="w-1/6">
              <div className="w-full h-32 md:h-44 rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-2">{item.title}</h1>
            </div>
          ))}
        </div>
        <div className={`scrollDiv flex justify-around  shrink-0`}>
          {categoryData.map((item,index) => (
            <div key={index} className="w-1/6">
              <div className="w-full h-32 md:h-44 rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-2">{item.title}</h1>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default ScrollbaleCard;
