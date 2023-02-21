export type IUser = {
  _id: string;
  email: string;
  username: string;
  password: string;
  fullname: string;
  gender: string;
  decription: string;
  yourviewed: number;
  profileviewed: number;
  youviewed: number;
  lastlogin: string;
  status: number;
  profilepicture: string;
  permission: string;
};

export type ICategory = {
  _id: string;
  text: string;
};

export type AuthState = {
  user: IUser;
  accessToken: string;
  loading: boolean;
  categories: ICategory[];
};

export const userDefaultData = {
  _id: "",
  email: "",
  username: "",
  password: "",
  fullname: "",
  gender: "",
  decription: "",
  yourviewed: 0,
  profileviewed: 0,
  youviewed: 0,
  lastlogin: "",
  status: 0,
  profilepicture: "",
  permission: "",
};
