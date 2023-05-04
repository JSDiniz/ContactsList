import { createContext, useContext, useCallback, useState } from "react";

import { Api } from "../../services";
import { IAuthContext, IAuthProvider } from "../../interface/Auth";
import { IAuthUser } from "../../interface/User";
import { Ilogin } from "../../interface/Login";

const AuthContex = createContext<IAuthContext>({} as IAuthContext);
const useAuth = () => {
  const context = useContext(AuthContex);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: IAuthProvider) => {
  const [data, setdata] = useState<IAuthUser>(() => {
    const token = localStorage.getItem("@ContactsList:token");
    const user = localStorage.getItem("@ContactsList:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthUser;
  });

  const signIn = useCallback(async (body: Ilogin) => {
    const res = await Api.post("/login", body);

    const { token, user } = res.data;

    localStorage.setItem("@ContactsList:token", token);
    localStorage.setItem("@ContactsList:user", JSON.stringify(user));

    setdata({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("@ContactsList:token");
    localStorage.removeItem("@ContactsList:user");

    setdata({} as IAuthUser);
  }, []);

  return (
    <AuthContex.Provider
      value={{ signIn, token: data.token, user: data.user, logout }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export { useAuth, AuthProvider };
