export type IComment = {
  _id: string;
  PID: string;
  USERID: string;
  comment_content: string;
  email: string;
  profilepicture: string;
  createdAt: number;
  updatedAt: number;
};

export type CommentState = {
  comments: IComment[];
};

export const commentDefaultData = {
  _id: "",
  PID: "",
  USERID: "",
  comment_content: "",
  email: "",
  profilepicture: "",
  createdAt: 0,
  updatedAt: 0,
};
