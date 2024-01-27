import React from "react";

import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashBoard from "../pages/DashBoard";
import AuthProtected from "./AuthProtected";
import Protected from "./Protected";


const Navigation = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/" element={<AuthProtected />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<Protected />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>

      </Routes>
    </>
  );
};

export default Navigation;
