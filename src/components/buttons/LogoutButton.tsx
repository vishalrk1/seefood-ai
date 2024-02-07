import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/store/auth/action";

const LogoutButton = () => {
  const dispatch = useDispatch<any>();
  return (
    <button
      className="black_btn flex items-center gap-1"
      title="Logout"
      onClick={() => dispatch(logoutUser())}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
