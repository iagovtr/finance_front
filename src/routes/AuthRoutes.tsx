import React from "react";
import { Routes, Route } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<div>Login</div>} />
    </Routes>
  );
};

export default AuthRoutes;
