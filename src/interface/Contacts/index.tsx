import { IEmails, IEmailsRes } from "../Emails";
import { IPhones, IPhonesRes } from "../Phones";

export interface ICreateContacts {
  name: string;
  phone: string;
  email: string;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

export interface IContacts {
  name: string;
  phones: Array<IPhones>;
  emails: Array<IEmails>;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

export interface IContactsRes {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  phones: Array<IPhonesRes>;
  emails: Array<IEmailsRes>;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

export interface IContactsUser extends IContactsRes {
  users: {
    id: string;
    name: string;
    email: string;
    phone: string;
    imageUrl?: string | null | undefined;
    githubUrl?: string | null | undefined;
    linkedinUrl?: string | null | undefined;
    portfolioUrl?: string | null | undefined;
    isAdmin: false;
    isActive: true;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ICreateContactsUser extends IContacts {
  userId: string;
}
