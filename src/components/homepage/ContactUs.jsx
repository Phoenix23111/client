import React, { useEffect, useState } from "react";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Footer from "./Footer";

function ContactUs({ aboutcontactus }) {
  const apikey = import.meta.env.VITE_GOOGLE_MAPS_APIKEY;
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    Msg: "",
  });

  const locations = [
    {
      name: "ShowRoom",
      lat: 33.522371229623985,
      lng: 73.14756910018663,
      address:
        "4 & 5B, Nadir Plaza, Opp. Lignum Tower Gate 2, DHA2, G.T. Road,Rawalpindi.",
    },
    {
      name: "Office",
      lat: 33.689286779656705,
      lng: 72.83761654630221,
      address:
        "Office No. 104, First Floor, Abdullah Center, Block B, B17-MultiGardens, Islamabad.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={aboutcontactus}
      className="flex flex-col w-full bg-secondary h-full"
    >
      {/* contactUs TEXT */}
      <div className="flex items-center justify-center text-5xl text-main font-bold py-10">
        Contact Us
      </div>
      {/* Line span */}
      <span className=" flex w-full px-24 md:px-96 items-center justify-center">
        <span className="border flex1 w-[25%] border-black"></span>
        <span className="border flex1 w-[50%] h-2 bg-primary border-primary"></span>
        <span className="border flex1 w-[25%] border-black"></span>
      </span>
      {/* Form for Contact */}
      <div className="flex justify-center items-center bg-[url('/images/contactusimg.jpg')] bg-cover py-3 px-3 lg:py-10 lg:px-80 mt-10">
        <form
          onSubmit={handleSubmit}
          action="post"
          className="text-white flex flex-wrap gap-10 columns-2 w-full h-full p-10 rounded-xl bg-transparent backdrop-blur-md backdrop-brightness-110  shadow-2xl"
        >
          <div className="flex flex-1 gap-2 flex-col">
            <label htmlFor="name">Name:</label>
            <input
              className="w-full h-10 rounded-md p-1 border-none bg-secondary text-black outline-primary"
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              required={true}
            />
          </div>
          <div className="flex flex-1 gap-2 flex-col">
            <label htmlFor="email">Email:</label>

            <input
              className="w-full h-10 rounded-md p-1 border-none  bg-secondary text-black outline-primary"
              id="email"
              type="email"
              name="email"
              onChange={handleOnChange}
              required={true}
            />
          </div>
          <div className="flex w-full gap-2 flex-col">
            <label htmlFor="MSG">Message:</label>
            <textarea
              className="w-full h-52 rounded-md p-2 border-none  bg-secondary text-black outline-primary"
              id="MSG"
              type="text"
              required={true}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="active:bg-teal-800 active:translate-y-0 active:transition-transform active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-main h-12 w-48 shadow-2xl rounded-lg hover:scale-105 hover:-translate-y-2 hover:transition-transform hover:duration-500 hover:ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* maps grid */}
      <div className="mt-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-auto w-full md:px-10  bg-main text-white h-auto justify-around">
        <div className="flex row-span-1 col-span-2 flex-1 w-full flex-col text-center items-center gap-8 px-5 py-5">
          <h1 className="text-2xl w-[50%] font-bold py-3 border-b-2 border-b-secondary">
            Contacts
          </h1>
          <h3>
            0321 58888 32 <br /> 051 5709 438 <br /> www.dsstore.com.pk <br />
            mhtariqmajeed@gmail.com
          </h3>
        </div>
        <div className="flex  row-span-1 col-span-2  text-center justify-center items-center text-2xl font-bold mt-3 py-3">
          <h1 className="text-2xl w-[50%] font-bold py-3 border-b-2 border-b-secondary">
            Addresses
          </h1>
        </div>
        <div className=" col-span-2 w-full h-full text-center items-center mb-1  ">
          <div className="grid grid-flow-row  md:grid-cols-2">
            <div className=" w-full h-full col-span-1 ">
              <h2 className="font-semibold underline py-5">
                {locations[0].name}
              </h2>
              <h3>{locations[0].address}</h3>
              <div className="col-span-1 md:rounded-xl overflow-hidden  w-full h-96 pt-6 p-2 md:p-6">
                <APIProvider apiKey={apikey}>
                  <Map
                    className="w-full h-full rounded-xl md:rounded-3xl overflow-hidden"
                    defaultZoom={17}
                    defaultCenter={{
                      lat: locations[0].lat,
                      lng: locations[0].lng,
                    }}
                    mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
                    fullscreenControl={false}
                    streetViewControl={false}
                  >
                    <AdvancedMarker
                      onClick={() => {
                        setOpen1(true);
                      }}
                      position={{
                        lat: locations[0].lat,
                        lng: locations[0].lng,
                      }}
                    />
                  </Map>
                </APIProvider>
              </div>
            </div>

            <div className="w-full h-full col-span-1">
              <h2 className="font-semibold underline py-5">
                {locations[1].name}
              </h2>
              <h3>{locations[1].address}</h3>

              <div className="col-span-1 md:rounded-xl overflow-hidden  w-full h-96 pt-6 p-2 md:p-6">
                <APIProvider apiKey={apikey}>
                  <Map
                    className="w-full h-full rounded-xl md:rounded-3xl overflow-hidden"
                    defaultZoom={17}
                    defaultCenter={{
                      lat: locations[1].lat,
                      lng: locations[1].lng,
                    }}
                    mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
                    fullscreenControl={false}
                    streetViewControl={false}
                  >
                    <AdvancedMarker
                      onClick={() => {
                        setOpen2(true);
                      }}
                      position={{
                        lat: locations[1].lat,
                        lng: locations[1].lng,
                      }}
                    />
                  </Map>
                  {/* {open && <InfoWindow></InfoWindow>} */}
                </APIProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
