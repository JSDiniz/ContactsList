import { RouteProps } from "react-router-dom";
import { ComponentType } from "react";
import { ReactNode } from "react";
import { Ilogin } from "../Login";
import { IUpdate, IUserContacts } from "../User";
import { IContactsUser, ICreateContactsUser } from "../Contacts";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  token: string;
  user: IUserContacts;
  signIn: (data: Ilogin) => Promise<void>;
  logout: () => void;

  deleteUser: (userId: string, token: string) => Promise<void>;
  updateUser: (userId: string, body: IUpdate, token: string) => Promise<void>;
}

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export interface IContactsContext {
  contacts: IContactsUser[];
  createContacts: (body: ICreateContactsUser, token: string) => void;
  loadContacts: (userId: string, token: string) => Promise<void>;
  deleteContacts: (contactId: string, token: string) => Promise<void>;
  updateContact: (
    contactId: string,
    updateContact: ICreateContactsUser,
    token: string
  ) => Promise<void>;
}
