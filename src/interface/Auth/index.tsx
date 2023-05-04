import { RouteProps } from "react-router-dom";
import { ComponentType } from "react";
import { ReactNode } from "react";
import { Ilogin } from "../Login";
import { IUser, IUserContacts } from "../User";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  token: string;
  user: IUserContacts;
  signIn: (body: Ilogin) => Promise<void>;
  logout: () => void;
}

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}
