import { createContext, useContext, useCallback, useState } from "react";
import { Api } from "../../services";
import { IAuthContext, IAuthProvider } from "../../interface/contexts";
import { IAuthUser, IUpdate } from "../../interface/User";
import { Ilogin } from "../../interface/Login";
import { IContactsUser } from "../../interface/Contacts";

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
  const [contacts, setContacts] = useState<IContactsUser[]>([]);

  const signIn = useCallback(async (body: Ilogin) => {
    const res = await Api.post("/login", body);

    const { token, user } = res.data;

    localStorage.setItem("@ContactsList:token", token);
    localStorage.setItem("@ContactsList:user", JSON.stringify(user));

    setdata({ token, user });
    setContacts(user.contacts);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("@ContactsList:token");
    localStorage.removeItem("@ContactsList:user");

    setdata({} as IAuthUser);
  }, []);

  const deleteUser = useCallback(async (userId: string, token: string) => {
    await Api.delete(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => {
        logout();
      })
      .catch((err) => console.log(err.data));
  }, []);

  const updateUser = useCallback(
    async (userId: string, body: IUpdate, token: string) => {
      await Api.patch(`/users/${userId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <AuthContex.Provider
      value={{
        signIn,
        token: data.token,
        user: data.user,
        logout,
        deleteUser,
        updateUser,
        contacts,
        setContacts,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};

export { useAuth, AuthProvider };
