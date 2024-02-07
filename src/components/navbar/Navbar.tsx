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
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigation("/")}
      >
        SeeFood 🍔
      </p>
      {user ? (
        <div className="flex items-center gap-2">
          <LogoutButton />
          <button
            className="gray_btn flex items-center gap-1"
            title="Get more credits"
            onClick={() => {}}
          >
            Buy Credits
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button
            className="black_btn flex items-center gap-1"
            title="Sign Up"
            onClick={() => navigation("/signup")}
          >
            Sign Up
          </button>
          <button
            className="black_btn flex items-center gap-1"
            title="Sign In"
            onClick={() => navigation("/login")}
          >
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
