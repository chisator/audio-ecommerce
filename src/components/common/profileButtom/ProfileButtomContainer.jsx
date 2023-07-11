import { useDispatch, useSelector } from "react-redux";
import { ProfileButtom } from "./ProfileButtom";
import { clearLogin } from "../../../store/authSlice";
export const ProfileButtomContainer = () => {
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(clearLogin());
  }
  const { user } = useSelector((store) => store.authSlice);
  return <ProfileButtom user={user} handleClick={handleClick} />;
};
