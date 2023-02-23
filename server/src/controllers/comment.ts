import User from "../models/User";
import Comment from "../models/Comment";
import { RequestExtended, ResponseExtended } from "../types";

export const createComment = async (
  req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const { _id } = req.headers.user as any;
    let user = (await User.findById({ _id })) as any;
    user = user?._doc;
    const { email, profilepicture } = user as any;
    const { PID, comment_content } = req.body;
    const comment = {
      PID,
      USERID: _id,
      comment_content,
      email,
      profilepicture,
    };
    let newComment = new Comment(comment);
    let saveComment = (await newComment.save()) as any;
    saveComment = saveComment._doc;
    return res.status(200).json({
      status: 200,
      comment: saveComment,
      message: "success",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
export const getCommentsByPID = async (
  req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ PID: id });
    return res.status(200).json({
      status: 200,
      comments,
      message: "success",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteComment = async (
  req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const { id } = req.body;
    const comment = await Comment.deleteOne({ _id: id });
    return res.status(200).json({
      status: 200,
      comment,
      message: "success",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
