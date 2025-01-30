import React from "react";

import AuthNav from "../components/authpage/AuthNav";
import FormArea from "../components/authpage/FormArea";

const AuthPage = () => {
  return (
    <>
      <div className="flex flex-col pt-2 py-5 px-10 bg-[url('/images/authpagebg.png')] bg-cover bg-blend-overlay bg-black/30 box-border min-h-screen">
        <AuthNav />
        <FormArea />
      </div>
    </>
  );
};

export default AuthPage;
