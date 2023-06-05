import { IContactsRes } from "../Contacts";

export interface IUserReq {
  name: string;
  email: string;
  password: string;
  phone: string;
  imageUrl?: string;
  confirmPassword: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  imageUrl: string;
}

export interface IAuthUser {
  token: string;
  user: IUserContacts;
}

export interface IUserContacts extends IUser {
  contacts: Array<IContactsRes>;
}

export interface IUpdate {
  name: string;
  email: string;
  phone: string;
  imageUrl?: string;
}
