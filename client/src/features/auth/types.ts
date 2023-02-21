export type IUser = {
  USERID: string;
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

export type AuthState = {
  user: IUser;
  accessToken: string;
  loading: boolean;
};

export const userDefaultData = {
  USERID: "",
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
