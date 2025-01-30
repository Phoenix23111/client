import React from "react";

const LoginForm = ({ handletogglestate }) => {
  return (
    <div className=" text-main h-full py-10 w-full  ">
      <div className="flex flex-col pl-8 pr-8  h-full">
        <div className="flex text-3xl   font-bold justify-center items-center">
          LOGIN
        </div>
        <div className="py-10 pb-20 px-4 w-full h-full">
          <form action="post" className="flex flex-col h-full gap-4 ">
            <div className="flex  gap-2 flex-col">
              <label className="text-lg" htmlFor="email">
                Email:
              </label>

              <input
                className="w-full h-10 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="email"
                type="email"
                name="email"
                onChange={""}
                required={true}
              />
            </div>
            <div className="flex  gap-2 flex-col">
              <label className="text-lg" htmlFor="name">
                Password:
              </label>
              <input
                className="w-full h-10 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="name"
                type="text"
                name="name"
                onChange={""}
                required={true}
              />
            </div>

            <div className="w-full flex flex-1 justify-center items-end">
              <button className="text-white  active:bg-teal-800  active:translate-y-0 active:transition-all active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-main h-12 w-full shadow-2xl rounded-full hover:scale-100 hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out">
                Login
              </button>
            </div>
          </form>
          <div className="flex pt-4  w-full justify-center font-bold items-center">
            Don't Have an Account?{" "}
            <button
              onClick={() => handletogglestate("signup")}
              className="text-secondary font-bold pl-2 underline"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
