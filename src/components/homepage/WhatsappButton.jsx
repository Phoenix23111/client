import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <div
      onClick={() => {
        window.open(
          "https://api.whatsapp.com/send?phone=+923215888832&text=Hello%2C%20I%20am%20interested%20in%20your%20products.",
          "_blank"
        );
      }}
      className=" hover:cursor-pointer hover:bg-green-400 flex justify-center w-14 h-14 rounded-full bg-green-600 transition-all duration-700 m-5 fixed text-white bottom-5 right-0  items-center"
    >
      <BsWhatsapp className="text-4xl font-bold" />
    </div>
  );
};

export default WhatsappButton;
