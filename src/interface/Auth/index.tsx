import { ReactNode } from "react";
import { Ilogin } from "../Login";
import { IUser } from "../User";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  token: string;
  login: (body: Ilogin) => Promise<void>;
  // user: IUser;
}

// use, setUse
