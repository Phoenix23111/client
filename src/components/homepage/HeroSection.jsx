import React from "react";
import herobgvid from "/images/herobgvid.mp4";

function HeroSection() {
  return (
    <div className="mt-20 relative h-[40vh] overflow-hidden  w-full bg-cover bg-blend-overlay bg-black/50  sm:h-[50vh] md:h-[70vh] lg:h-screen box-border ">
      <video
        muted
        disablePictureInPicture
        playsInline
        autoPlay
        loop
        controlsList="nodownload nofullscreen noplaybackrate"
        onContextMenu={(e) => e.preventDefault()}
        className=" absolute top-0 left-0 w-full object-cover h-[120vh]"
      >
        <source src={herobgvid} type="video/mp4" />
      </video>
      <div className="absolute top-16 left-40 overflow-hidden w-[80%] h-[80%] bg-secondary/30 backdrop-brightness-90 text-main grid-rows-[auto,1fr] backdrop-blur-md rounded-xl flex flex-col justify-center gap-20 p-10 shadow-2xl shadow-white/30">
        <div className="text-6xl font-bold  mb-5  ">
          DSS-Design Solution Store
        </div>
        <div className=" flex gap-3 flex-col w-1/2">
          <div className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illo
            maiores eveniet dolores non,
          </div>
          <div className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            eum. Eius repudiandae dignissimos possimus. Blanditiis id, iure
            itaque laudantium libero fugit laboriosam amet! Provident nostrum
            earum aperiam, magnam distinctio excepturi?
          </div>
          <div className="absolute h-20 w-20 rounded-full bg-gradient-to-bl from-main to-secondary top-10 right-32"></div>
          <div className="absolute h-40 w-40 rounded-full bg-gradient-to-tr from-main to-secondary bottom-60 right-48"></div>
          <div className="absolute h-80 w-80 rounded-tl-full bg-gradient-to-tl from-main  to-primary bottom-0 right-0"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
