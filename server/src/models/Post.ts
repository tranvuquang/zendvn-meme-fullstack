import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    USERID: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profilepicture: {
      type: String,
      require: true,
      default: "",
    },
    url_image: {
      type: String,
      require: true,
      default: "",
    },
    post_content: {
      type: String,
      require: true,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    category: {
      type: Array,
      default: [],
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
