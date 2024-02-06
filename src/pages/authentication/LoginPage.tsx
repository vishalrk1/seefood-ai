import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/store/auth/authSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import "../../index.css";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { user, status, error } = useSelector((state: RootState) => state.auth); // Select auth slice state

  const handleLogin = async () => {
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        if (status === "succeeded") {
          navigation("/");
        }
      })
      .catch((err: any) => {
        setIsError(true);
      });
  };

  return (
    <div className="app">
      <Navbar />
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center mt-10">
          {status === "loading" ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="summary_box flex flex-col shadow-md p-4 w-max">
              <input
                type="email"
                placeholder="Email"
                className="mb-2 w-max rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-md font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-max rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-md font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isError && (
                <div className="text-red-500 text-sm ml-1">{`Something went wrong try again`}</div>
              )}
              <button
                className="w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
                onClick={handleLogin}
                disabled={status === "loading"}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
