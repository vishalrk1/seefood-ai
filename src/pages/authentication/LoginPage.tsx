import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import "../../index.css";
import { RootState } from "../../redux/store/store";
import { logInWithGoogle, loginUser } from "../../redux/store/auth/action";
import { CardWrapper } from "@/components/auth/card-wrapper";
import Loader from "@/components/Loader";
import { ErrorInfo } from "@/components/ErrorInfo";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMeaasage, setErrorMessage] = useState<string>(
    "Something went wrong try again"
  );
  const { user, status, error } = useSelector((state: RootState) => state.auth); // Select auth slice state

  const handleLogin = async () => {
    setIsError(false);
    dispatch(loginUser({ email, password }))
      .then((data: any) => {
        if (data.type === "auth/loginUser/fulfilled") {
          navigation("/");
        } else if (data.type === "auth/loginUser/rejected") {
          setIsError(true);
          setErrorMessage(error?.split(": ")[1]?.split(". ")[0] as string);
          console.log(error?.split(": ")[1]?.split(". ")[0]);
        }
      })
      .catch((err: any) => {
        setIsError(true);
      });
  };

  const handelGoogleLogin = () => {
    dispatch(logInWithGoogle()).then((data: any) => {
      console.log(data);
      if (data.type === "auth/logInWithGoogle/fulfilled") {
        navigation("/");
      } else if (data.type === "auth/loginWithGoogle/rejected") {
        setIsError(true);
      }
    });
  };

  return (
    <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
      <Navbar />
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex flex-col p-4 w-max">
            <CardWrapper
              backButtonHref="/signup"
              backButtonLbel="dont have an account?"
              headerLabel="Cook some crazy food with seefood"
              showSocials={true}
              googlClick={handelGoogleLogin}
            >
              <input
                type="email"
                placeholder="Email"
                className="mb-2 w-full font-s rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isError && <ErrorInfo message={errorMeaasage} />}
              <button
                className="w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
                onClick={handleLogin}
                disabled={status === "loading"}
              >
                {status === "loading" && <Loader />}
                Keep Exploring
              </button>
            </CardWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
