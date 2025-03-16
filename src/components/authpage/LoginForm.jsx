import React, { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handletogglestate }) => {
  const { user, googleLoginMutation, simpleLogin } = useAuth();
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform login using the mutation function
    try {
      const res = await simpleLogin.mutateAsync({ email, password });
      if (res !== null) {
        if (res.role === "admin") {
          Navigate("/AdminDashboard");
        } else {
          Navigate(-1);
        }
      }
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className=" text-main h-full box-border py-5 md:py-10 w-full  ">
      <div className="flex flex-col md:pl-8 md:pr-8  h-full">
        <div className="flex text-3xl   font-bold justify-center items-center">
          LOGIN
        </div>
        <div className="md:py-10 pb-20 px-4 w-full h-full">
          <form
            action="/products"
            onSubmit={handleSubmit}
            className="flex flex-col  gap-4 "
          >
            <div className="flex  gap-2 flex-col">
              <label className="text-lg" htmlFor="loginemail">
                Email:
              </label>

              <input
                className="w-full h-8 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="loginemail"
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required={true}
              />
            </div>
            <div className="flex  gap-2 flex-col">
              <label className="text-lg" htmlFor="name">
                Password:
              </label>
              <input
                className="w-full h-8 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="name"
                type="password"
                name="name"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required={true}
              />
            </div>

            <div className="w-full flex pt-5 justify-center items-end">
              <button
                type="submit"
                className="text-white  active:bg-teal-800  active:translate-y-0 active:transition-all active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-main h-10 w-full shadow-2xl rounded-full hover:scale-100 hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex pt-5  w-full justify-center text-sm md:text-base font-bold items-center">
            Don't Have an Account?{" "}
            <button
              onClick={() => handletogglestate("signup")}
              className="text-white font-bold pl-2 underline"
            >
              Signup
            </button>
          </div>
          <div className="flex justify-center py-4 text-white">OR</div>
          <div className="w-full flex  justify-center items-end px-4">
            <button
              onClick={() => {
                googleLoginMutation.mutate();
              }}
              className="flex  text-main  active:bg-primary  active:translate-y-0 active:transition-all active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-secondary h-10 w-full shadow-2xl rounded-full hover:scale-100 hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out gap-10 justify-center items-center"
            >
              <FcGoogle className="text-3xl" />
              <div className="">Sign in with Google</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
