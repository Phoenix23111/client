import React from "react";
import herobgvid from "/images/0220.mp4";

function HeroSection() {
  return (
    <div className="mt-16 relative flex  w-full bg-cover bg-blend-overlay bg-black/50 h-screen box-border ">
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
        <div className=" w-full h-[75%]   md:w-[85%] md:h-[85%]  lg:w-[80%] lg:h-[80%] bg-secondary/30 backdrop-brightness-90 text-main max-sm:text-center  backdrop-blur-md rounded-xl flex flex-col   md:gap-20 p-5 md:p-10 shadow-2xl shadow-white/30 ">
          <div className="text-4xl md:text-6xl font-bold  mb-5  ">
            DSS-Design Solution Store
          </div>
          <div className=" flex max-sm:justify-center  h-full gap-3 flex-col md:w-1/2  ">
            <div className="text-white ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              illo maiores eveniet dolores non,
            </div>
            <div className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              eum. Eius repudiandae dignissimos possimus. Blanditiis id, iure
              itaque laudantium libero fugit laboriosam amet! Provident nostrum
              earum aperiam, magnam distinctio excepturi?
            </div>
            <div className="absolute md:h-10 md:w-10 lg:h-20 lg:w-20 rounded-full bg-gradient-to-bl from-main to-secondary md:bottom-60 md:right-16 lg:top-10 lg:right-32"></div>
            <div className="absolute md:h-20 md:w-20 lg:h-40 lg:w-40 rounded-full bg-gradient-to-tr from-main to-secondary md:bottom-32 md:right-24 lg:bottom-60 lg:right-48"></div>
            <div className="absolute md:h-40 md:w-40 lg:h-80 lg:w-80 rounded-tl-full bg-gradient-to-tl from-main  to-primary bottom-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
