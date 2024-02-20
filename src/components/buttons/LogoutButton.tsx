import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/store/auth/action";

const LogoutButton = () => {
  const dispatch = useDispatch<any>();
  return (
    <button
      className="rounded-full border border-black bg-black py-1.5 px-5 text-base text-white transition-all hover:bg-white hover:text-black flex items-center gap-1"
      title="Logout"
      onClick={() => dispatch(logoutUser())}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
