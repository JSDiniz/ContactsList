import { createContext, useContext, useCallback, useState } from "react";

import { Api } from "../../services";
import { IAuthContext, IAuthProvider } from "../../interface/Auth";
import { IAuthUser } from "../../interface/User";
import { Ilogin } from "../../interface/Login";

const AuthContex = createContext<IAuthContext>({} as IAuthContext);
const UseAuth = () => {
  const context = useContext(AuthContex);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: IAuthProvider) => {
  const [use, setUse] = useState<IAuthUser>(() => {
    const token = localStorage.getItem("@ContactsList:token");

    if (token) {
      return { token };
    }

    return {} as IAuthUser;
  });

  const login = useCallback(async (body: Ilogin) => {
    const res = await Api.post("/login", body);

    const { token } = res.data;

    localStorage.setItem("@ContactsList:token", token);
    setUse(res.data.token);
  }, []);

  return (
    <AuthContex.Provider value={{ login, token: use.token }}>
      {children}
    </AuthContex.Provider>
  );
};

export { UseAuth, AuthProvider };