import React from "react";
import Footer from "./Footer";

function ContactUs({ aboutcontactus }) {
  return (
    <div
      ref={aboutcontactus}
      className="flex flex-col w-full bg-gray-100 h-full"
    >
      <div className="flex items-center justify-center text-5xl font-bold py-10 ">
        Contact Us
      </div>
      <span className=" flex w-full px-96 items-center justify-center">
        <span className="border flex1 w-[25%] border-black"></span>
        <span className="border flex1 w-[50%] h-2 bg-green-600 border-green-600"></span>
        <span className="border flex1 w-[25%] border-black"></span>
      </span>
      <div className="flex justify-center items-center bg-[url('/images/contactusimg.jpg')] bg-cover py-10 px-80 mt-10">
        <div className="  text-white flex flex-wrap gap-10 columns-2 w-full h-full p-10 rounded-xl bg-transparent backdrop-blur-md backdrop-brightness-110 shadow-white/30 shadow-2xl ">
          <div className="flex flex-1 gap-2 flex-col">
            <label htmlFor="NAME">Name:</label>
            <input
              className="w-full h-10 rounded-md p-1 border-none bg-gray-200 text-black outline-gray-400 "
              id="NAME"
              type="text"
            />
          </div>
          <div className="flex flex-1 gap-2 flex-col">
            <label htmlFor="EMAIL">Email:</label>
            <input
              className="w-full h-10 rounded-md p-1 border-none bg-gray-200 text-black  outline-gray-400"
              id="EMAIL"
              type="text"
            />
          </div>
          <div className="flex w-full gap-2 flex-col">
            <label htmlFor="MSG">Message:</label>
            <textarea
              className="w-full h-52 rounded-md p-2 border-none  bg-gray-200 text-black outline-gray-400"
              id="MSG"
              type="text"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <button className=" active:bg-green-400 active:translate-y-0 active:transition-transform active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-green-500 h-12 w-48 drop-shadow-xl rounded-lg hover:scale-105 hover:-translate-y-2  hover:transition-transform hover:duration-500 hover:ease-in-out ">
              submit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full px-80 flex bg-emerald-950 text-white h-96 gap-20 justify-center">
        <div className=" flex flex-1 w-full flex-col text-center items-center gap-8 px-5 py-5">
          <h1 className="text-2xl font-bold py-3">Contacts</h1>

          <h3>
            0321 58888 32 <br /> 051 5709 438 <br /> www.dsstore.com.pk <br />
            mhtariqmajeed@gmail.com
          </h3>
        </div>
        <div className=" flex flex-1 w-full flex-col text-center items-center gap-4 px-5 py-5">
          <h1 className="text-2xl font-bold py-3">Address</h1>
          <h2 className="font-semibold underline">Showroom</h2>
          <h3>
            4 & 5B, Nadir Plaza, Opp. Lignum Tower Gate 2, DHA2, G.T. Road,
            Rawalpindi.
          </h3>
          <h2 className="font-semibold underline">Office</h2>
          <h3>
            Offce No. 104, First Floor, Abdullah Center, Block B, B17-Multi
            Gardens, Islamabad.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
