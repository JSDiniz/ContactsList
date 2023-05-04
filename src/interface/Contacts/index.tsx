import { IEmailsRes } from "../Emails";
import { IPhonesRes } from "../Phones";

export interface IContactsRes {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  phones: Array<IPhonesRes>;
  emails: Array<IEmailsRes>;
  imageUrl: string;
}
