import React from "react";

import AuthNav from "../components/authpage/AuthNav";
import FormArea from "../components/authpage/FormArea";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  const authState = location.state?.authState;
  

  return (
    <>
      <div className="flex flex-col pt-2 py-5 px-10 bg-[url('/images/authpagebg.png')] bg-cover bg-blend-overlay bg-black/30 box-border min-h-screen">
        <AuthNav />
        <FormArea state={authState} />
      </div>
    </>
  );
};

export default AuthPage;
