import { useTowerContext } from "../../../../Context";

const UserInfo = () => {
  const { userInfo } = useTowerContext();

  return (
    <div>
      <section>
        User: {userInfo?.user?.userName}
        <br />
        Email: {userInfo?.user?.email}
      </section>
    </div>
  );
};

export default UserInfo;
