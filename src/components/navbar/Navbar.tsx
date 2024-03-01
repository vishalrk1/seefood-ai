import React from "react";
import LogoutButton from "../buttons/LogoutButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";

const Navbar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigate();

  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <p
        className="text-xl md:text-2xl font-bold cursor-pointer"
        onClick={() => navigation("/")}
      >
        SeeFood 🍔
      </p>
      {user ? (
        <div className="flex items-center gap-2">
          <LogoutButton />
          <button
            className="rounded-full border border-gray-300 bg-gray-200 py-1.5 px-2 md:px-5 text-gray-700 transition-all hover:bg-gray-300 hover:text-black flex items-center gap-1 text-sm md:text-base"
            title="Get more credits"
            onClick={() => navigation("/contact")}
          >
            Buy Credits
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button
            className="rounded-full border border-black bg-black py-1.5 px-5 text-sm md:text-base text-white transition-all hover:bg-white hover:text-black flex items-center gap-1"
            title="Sign In"
            onClick={() => navigation("/login")}
          >
            Log In
          </button>
          <button
            className="rounded-full border border-black bg-black py-1.5 px-5 text-sm md:text-base text-white transition-all hover:bg-white hover:text-black flex items-center gap-1"
            title="Sign Up"
            onClick={() => navigation("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
