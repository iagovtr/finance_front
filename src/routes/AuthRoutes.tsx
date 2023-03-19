import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../modules/SignIn";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AuthRoutes;
