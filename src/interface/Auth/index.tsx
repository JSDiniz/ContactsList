import { RouteProps } from "react-router-dom";
import { ComponentType } from "react";
import { ReactNode } from "react";
import { Ilogin } from "../Login";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  token: string;
  login: (body: Ilogin) => Promise<void>;
  logout: () => void;
}

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}
