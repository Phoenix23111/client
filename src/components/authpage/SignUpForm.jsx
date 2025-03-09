import React, { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = ({ handletogglestate }) => {
  const { user, googleLoginMutation, signupMutation } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // Clear previous errors
    signupMutation.mutate({ name, email, password });
  };

  return (
    <div className=" text-main h-full w-full py-10 md:px-10  ">
      <div className="flex flex-col  h-full">
        <div className="flex text-3xl   font-bold justify-center items-center">
          Sign Up
        </div>
        <div className="flex flex-col w-full p-2 h-full">
          <form
            onSubmit={handleSignup}
            action="post"
            className="flex flex-col h-full gap-2 "
          >
            <div className="flex   flex-col">
              <label className="text-lg" htmlFor="name">
                Name:
              </label>

              <input
                className="w-full h-8 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="name"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </div>
            <div className="flex   flex-col">
              <label className="text-lg" htmlFor="email">
                Email:
              </label>

              <input
                className="w-full h-8 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div className="flex  flex-col">
              <label className="text-lg" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full h-8 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>
            <div className="flex  flex-col">
              <label className="text-lg" htmlFor="cpassword">
                Confirm Password:
              </label>
              <input
                className="w-full h-8 rounded-full p-4 border-none bg-secondary text-black outline-primary"
                id="cpassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
            </div>

            <div className="w-full flex flex-col pt-2  justify-center ">
              {error && <p className="text-red-500">{error}</p>}
              {signupMutation.isError && (
                <p className="text-red-500">
                  Error: {signupMutation.error.message}
                </p>
              )}
              <button
                disabled={signupMutation.isLoading}
                className="text-white   active:bg-teal-800 active:translate-y-0 active:transition-all active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-main h-10 w-full shadow-2xl rounded-full hover:scale-100 hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex pt-2  w-full text-sm justify-center font-bold items-center">
            Already Have an Account?{" "}
            <button
              onClick={() => handletogglestate("login")}
              className="text-white font-bold pl-2 underline"
            >
              LogIn
            </button>
          </div>
          <div className="flex justify-center  text-white">OR</div>
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

export default SignUpForm;
