import React from "react";
import useAuth from "../hooks/useAuth";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
