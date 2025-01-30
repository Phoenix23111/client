import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const FormArea = () => {
  const [toggleState, setToggleState] = useState("login");

  const handleToggleState = (state) => {
    setToggleState(state);
  };
  return (
    <div className="w-full flex  justify-center items-center lg:pt-6   lg:px-56">
      <div className="relative flex  transition-all duration-700 overflow-hidden  rounded-2xl shadow-black shadow-2xl backdrop-brightness-110 bg-secondary/40 backdrop-blur-md w-full h-[75vh]  ">
        <div
          className={`absolute top-0 left-0 h-full w-[55%] flex flex-1 col-span-5 rounded-l-2xl transition-all duration-700 ${
            toggleState === "login"
              ? "translate-x-0 opacity-100 z-50"
              : "translate-x-full opacity-0 z-0"
          }  `}
        >
          <div className=" w-full flex flex-col p-14 gap-10 items-center bg-[url('/images/loginpageimg.png')] bg-cover bg-blend-overlay bg-black/50 object-cover">
            <div className="text-primary text-5xl">Welcome Back!</div>
            <div className="text-secondary text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque
              suscipit, perferendis veritatis deserunt temporibus repellendus
              maxime dolorem error quod ullam incidunt architecto vero inventore
              eveniet ad voluptatem praesentium ex?
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 right-0 h-full w-[45%]  transition-all duration-700 flex flex-1 ${
            toggleState === "login"
              ? "translate-x-0 opacity-100 z-50"
              : "-translate-x-full opacity-0 z-0"
          } `}
        >
          <LoginForm handletogglestate={handleToggleState} />
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-[45%]  transition-all duration-700 flex flex-1 ${
            toggleState === "login"
              ? "translate-x-full opacity-0 z-0"
              : "-translate-x-0 opacity-100 z-50"
          } `}
        >
          <SignUpForm handletogglestate={handleToggleState} />
        </div>
        <div
          className={`absolute top-0 right-0 h-full w-[55%] flex flex-1 col-span-5 rounded-l-2xl transition-all duration-700 ${
            toggleState === "login"
              ? "-translate-x-full opacity-0 z-0"
              : "-translate-x-0 opacity-100 z-50"
          }  `}
        >
          <div className=" w-full flex flex-col p-14 gap-10 items-center bg-[url('/images/signuppageimg.png')] bg-cover bg-blend-overlay bg-black/50 object-cover">
            <div className="text-primary text-5xl">Hello!</div>
            <div className="text-secondary text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque
              suscipit, perferendis veritatis deserunt temporibus repellendus
              maxime dolorem error quod ullam incidunt architecto vero inventore
              eveniet ad voluptatem praesentium ex?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
