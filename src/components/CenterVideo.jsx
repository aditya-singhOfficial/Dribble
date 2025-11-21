import React from "react";

const CenterVideo = () => {
  return (
    <>
      <div className="w-2/5 rounded-4xl overflow-hidden">
        <div className="w-11/12 rounded-4xl overflow-hidden">
          <video
            src="https://cdn.dribbble.com/uploads/65454/original/3d47c346ad505c96ef0d2987ea972e76.mp4?1757355803"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </>
  );
};

export default CenterVideo;
