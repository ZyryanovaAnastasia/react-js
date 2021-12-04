import { useSelector, useDispatch } from "react-redux";
import { login, logout} from "../store/profile";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.profile.isAuth);
  let text = "Авторизуйтесь";
  if (isAuth) {
    text = "Вы авторизованы";
  }
  return (
    <div>
      <div>{text} </div>
      <button onClick={() => dispatch(login())}>LOGIN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
};
