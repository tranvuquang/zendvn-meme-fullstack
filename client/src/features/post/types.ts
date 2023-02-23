export type IPost = {
  _id: string;
  USERID: string;
  email: string;
  profilepicture: string;
  url_image: string;
  post_content: string;
  createdAt: number;
  updatedAt: number;
  status: string;
  count: number;
};

export type PostState = {
  posts: IPost[];
  currentPost: IPost;
};

export const postDefaultData = {
  _id: "",
  USERID: "",
  email: "",
  profilepicture: "",
  url_image: "",
  post_content: "",
  createdAt: 0,
  updatedAt: 0,
  status: "",
  count: 0,
};
