import React from "react";
import herobgvid from "/images/0220.mp4";

function HeroSection() {
  return (
    <div className="mt-16 relative flex  w-full bg-cover bg-blend-overlay bg-transparent h-[92vh] box-border ">
      <video
        muted
        disablePictureInPicture
        playsInline
        autoPlay
        loop
        controlsList="nodownload nofullscreen noplaybackrate"
        onContextMenu={(e) => e.preventDefault()}
        className=" absolute top-0 left-0 w-full object-cover h-full"
      >
        <source src={herobgvid} type="video/mp4" />
      </video>
      <div className="flex justify-center w-full h-full  items-center max-sm:p-6 ">
        <div className=" max-sm:relative overflow-hidden w-full h-[75%]   md:w-[85%] md:h-[85%]  lg:w-[80%] lg:h-[80%] bg-secondary/30 backdrop-brightness-90 text-main max-sm:text-center  backdrop-blur-md rounded-xl flex flex-col lg:flex-row    shadow-2xl shadow-white/30 ">
          <div className="flex flex-1 flex-col justify-center items-center z-10  text-3xl md:text-5xl font-bold  md:p-5 text-nowrap">
            <div className="flex flex-col w-full   items-center">
              <img
                src="/client/images/logo.png"
                alt=""
                className=" size-14 md:size-24 lg:size-40 object-contain"
              />
              <img
                src="/client/images/dss[1].png"
                alt=""
                className=" size-14 md:size-24  lg:size-32 object-contain"
              />
            </div>
            <div> Design Solution Store</div>
          </div>

          <div className="flex flex-1 lg:relative  ">
            {" "}
            <div className="absolute h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-gradient-to-bl from-main via-primary to-secondary -top-5 -right-5  lg:top-10 lg:right-32"></div>
            <div className="absolute h-32 w-32  lg:h-40 lg:w-40 rounded-full bg-gradient-to-tr from-main to-secondary max-md:bottom-40 max-md:-left-10 lg:bottom-60 lg:right-64"></div>
            <div className="absolute h-60 w-60 md:h-72 md:w-72  lg:h-80 lg:w-80 rounded-tl-full bg-gradient-to-tl from-main  to-primary bottom-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
