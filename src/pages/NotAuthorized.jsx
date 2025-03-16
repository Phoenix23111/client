import React from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorized = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex  ">
      <div className="flex   h-4/6 w-5/6 m-auto gap-10 md:gap-10 rounded-xl ">
        <div className="flex w-full h-full">
          <img
            src="/client/images/notauthorized.jpg"
            className="object-cover"
            alt=""
          />
        </div>
        <div className=" w-full h-full m-auto text-main  ">
          <div className="flex flex-col w-full h-full  gap-10  justify-center items-center text-center">
            <div className="text-6xl font-bold">OOPS!!</div>
            <div className="text-5xl">UnAuthorized Access!!!</div>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="border-2 font-semibold border-main  p-2 rounded-full active:bg-main active:text-white hover:bg-main hover:text-white"
            >
              Go Back To Main Screen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
