import { Ilogin } from "../Login";
import { ReactNode } from "react";
import { ComponentType } from "react";
import { IContactsUser } from "../Contacts";
import { RouteProps } from "react-router-dom";
import { IUpdate, IUserContacts } from "../User";
import { IContact } from "../../components/CreateContacts";
import { IEditContact } from "../../components/EditContact";

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
  contacts: IContactsUser[];
  setContacts: React.Dispatch<React.SetStateAction<IContactsUser[]>>;
}

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export interface IContactsContext {
  createContacts: (body: IContact, token: string) => Promise<void>;
  loadContacts: (userId: string, token: string) => Promise<void>;
  deleteContacts: (contactId: string, token: string) => Promise<void>;
  updateContact: (body: IEditContact, token: string) => Promise<void>;
}
