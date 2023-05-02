export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  imageUrl: string;
  isAdmin: boolean;
}

export interface IAuthUser {
  token: string;
  user?: IUser;
}
