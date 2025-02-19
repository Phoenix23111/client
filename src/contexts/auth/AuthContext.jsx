import React, { createContext, useContext } from "react";

const AuthContext = createContext();
export const useauth = () => useContext(AuthContext);
export default AuthContext;
