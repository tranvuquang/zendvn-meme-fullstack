import Post from "../models/Post";
import User from "../models/User";
import { RequestExtended, ResponseExtended } from "../types";

export const createPost = async (
  req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const { _id } = req.headers.user as any;
    let user = (await User.findById({ _id })) as any;
    user = user?._doc;
    const { email, profilepicture } = user as any;
    const { post_content, url_image, category } = req.body;
    const post = {
      USERID:_id,
      email,
      profilepicture,
      url_image,
      post_content,
      category,
    };
    let newPost = new Post(post);
    let savePost = (await newPost.save()) as any;
    savePost = savePost._doc;
    return res.status(200).json({
      status: 200,
      post: savePost,
      message: "success",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (
  _req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      status: 200,
      posts,
      message: "success",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
