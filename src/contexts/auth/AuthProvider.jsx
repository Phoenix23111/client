import React, { useEffect } from "react";
import AuthContext from "./AuthContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { auth, signInWithPopup, googleProvider } from "../../config/firebase";
import api from "../../config/axiosApi";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Redirect to login when user logs out

  // Fetch user session
  const { data: user, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await api.get("/api/auth/me");
      return res.data.user;
    },
    retry: false,
  });

  const queryClient = useQueryClient();

  // Signup Mutation
  const signupMutation = useMutation({
    mutationFn: async ({ name, email, password }) => {
      const res = await api.post("/api/auth/signup", { name, email, password });
      return res.data.user;
    },
    onSuccess: (userData) => {
      queryClient.setQueryData(["authUser"], userData);
      navigate(-1); // Navigate back after successful signup
    },
    onError: (error) => {
      console.error("Signup failed:", error.message);
    },
  });

  //simpleLogin Mutation
  const simpleLogin = useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await api.post("/api/auth/login", { email, password });

      return res.data.user;
    },
    onSuccess: (userData) => {
      // Update the authUser query data with the logged-in user
      queryClient.setQueryData(["authUser"], userData);
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });
  // Google Login Mutation (Store in MongoDB)
  const googleLoginMutation = useMutation({
    mutationFn: async () => {
      const result = await signInWithPopup(auth, googleProvider);

      const idToken = await result.user.getIdToken();

      const res = await api.post("/api/auth/googleAuth", { idToken });

      return res.data.user;
    },
    onSuccess: (userData) => {
      queryClient.setQueryData(["authUser"], userData);
      if (userData.role === "admin") {
        navigate("/admin/Dashboard");
      } else {
        navigate(-1);
      }
    },
  });
  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await api.post("/api/auth/logout");
    },
    onSuccess: () => {
      queryClient.setQueryData(["authUser"], null);
      
    },
  });
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        googleLoginMutation,
        logoutMutation,
        simpleLogin,
        signupMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
