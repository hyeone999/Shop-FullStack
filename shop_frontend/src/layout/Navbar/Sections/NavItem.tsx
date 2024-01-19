import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { routes } from "../../../utils/navbar";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunction";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  const isAuth = useSelector((state: RootState) => state.user?.isAuth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());

      // 로그아웃 성공 -> 로그인 페이지로 이동
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul
      className={`flex text-md justify-center w-full gap-4 ${
        mobile && "flex-col bg-gray-900 h-full"
      } items-center`}
    >
      {routes.map((value) => {
        if (isAuth !== value.auth) return null;

        return (
          <li
            key={value.name}
            className="py-2 text-center border-b-4 cursor-pointer"
          >
            <Link
              onClick={value.name === "로그아웃" ? handleLogout : undefined}
              to={value.to}
            >
              {value.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItem;
