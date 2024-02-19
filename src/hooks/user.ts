import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts";
import { ID, account } from "../appwrite/configs";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const useAuth = () => {
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
  const { setCurrentUser, currentUser } = useContext(StoreContext);
  const navigate = useNavigate();

  const login = async (values: any) => {
    try {
      setLoadingLogin(true);
      await account.createEmailSession(values.email, values.password);
      setCurrentUser(await account.get());
      navigate("/");
    } catch (e) {
      notification.error({
        message: "Lỗi",
        description: String(e),
      });
    } finally {
      setLoadingLogin(false);
    }
  };

  const register = async (values: any) => {
    try {
      setLoadingRegister(true);
      await account.create(
        ID.unique(),
        values.email,
        values.password,
        values.name
      );
      login(values);
    } catch (e) {
      notification.error({
        message: "Lỗi",
        description: String(e),
      });
    } finally {
      setLoadingRegister(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  });

  return { loadingLogin, loadingRegister, login, register };
};

const userHooks = {
  useAuth,
};

export default userHooks;
