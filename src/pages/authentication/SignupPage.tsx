import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { loginUser, registerUser } from "../../redux/store/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import toast from "react-hot-toast";
import { CardWrapper } from "@/components/auth/card-wrapper";

const SignupPage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { user, status, error } = useSelector((state: RootState) => state.auth); // Select auth slice state

  const handleLogin = async () => {
    dispatch(registerUser({ email, password, name }))
      .then(() => {
        if (status === "succeeded") {
          toast.success("Congrats! You have successfully earned 6 Credits 🎉", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          navigation("/");
        }
      })
      .catch((err: any) => {
        setIsError(true);
        console.log(err);
      });
  };

  return (
    <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
      <Navbar />
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex flex-col p-4 w-max">
            <CardWrapper
              backButtonHref="/login"
              backButtonLbel="already have an account?"
              headerLabel="keep cooking your food"
              showSocials={true}
            >
              {status === "loading" ? (
                <div className="text-center">Loading...</div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mb-2 w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="mb-2 w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
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
                  {isError && (
                    <div className="text-red-500 text-sm ml-1">{`Something went wrong try again`}</div>
                  )}
                  <button
                    className="w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
                    onClick={handleLogin}
                    disabled={status === "loading"}
                  >
                    Create Account
                  </button>
                </>
              )}
            </CardWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
