import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useState } from "react";
import { RootState } from "./redux/store";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "./redux/store/auth/authSlice";
import Hero from "./pages/Hero";
import ImageSection from "./pages/ImageSection";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomdPage/Homepage";
import LoginPage from "./pages/authentication/LoginPage";
import "./index.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default App;
