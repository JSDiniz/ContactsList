import { IEmails, IEmailsRes } from "../Emails";
import { IPhones, IPhonesRes } from "../Phones";

export interface ICreateContacts {
  name: string;
  telephone: string;
  email: string;
  imageUrl?: string;
}

export interface IContacts {
  name: string;
  phones: Array<IPhones>;
  emails: Array<IEmails>;
  imageUrl?: string;
}

export interface IContactsRes {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  phones: Array<IPhonesRes>;
  emails: Array<IEmailsRes>;
  imageUrl: string;
}

export interface IContactsUser extends IContactsRes {
  users: {
    id: string;
    name: string;
    email: string;
    telephone: string;
    imageUrl: string;
    isAdmin: false;
    isActive: true;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ICreateContactsUser extends IContacts {
  userId: string;
}
