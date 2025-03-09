import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import logotxt from "/images/dss.png";

const AuthNav = () => {
  return (
    <div className="flex justify-center items-center mb-5 ">
      <Link className="flex gap-2 " to={"/"}>
        <img src={logo} alt=" logo" className="w-auto size-12" />
        <img src={logotxt} alt=" logo" className="w-auto size-16" />
      </Link>
    </div>
  );
};

export default AuthNav;
