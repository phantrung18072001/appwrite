import React, { useContext } from "react";
import { account } from "../../appwrite/configs";
import { Spin } from "antd";
import { StoreContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { currentUser, setCurrentUser } = useContext(StoreContext);
  const navigate = useNavigate();
  if (!currentUser) {
    return <Spin />;
  }
  console.log(currentUser);
  const logout = async () => {
    await account.deleteSession("current");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <div>
      <div style={{ margin: 24 }}>It's Home, {currentUser?.name}</div>
      {currentUser?.labels.length > 0 && (
        <div style={{ margin: 24 }}>I'm, {currentUser?.labels}</div>
      )}
      <button type="button" onClick={logout} style={{ marginLeft: 24 }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
