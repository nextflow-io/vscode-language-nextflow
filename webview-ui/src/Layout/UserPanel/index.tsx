import { useTowerContext } from "../../Context";

import Login from "./Login";
import UserInfo from "./UserInfo";

const UserPanel = () => {
  const { tokenExpiry, hasToken } = useTowerContext();

  let tokenExpired = false;
  if (tokenExpiry) tokenExpired = tokenExpiry < Date.now() / 1000;

  if (!hasToken || tokenExpired) {
    return <Login />;
  }
  return <UserInfo />;
};

export default UserPanel;
