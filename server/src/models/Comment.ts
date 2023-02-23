import mongoose from "mongoose";

const CommnentSchema = new mongoose.Schema(
  {
    PID: {
      type: String,
      required: true,
    },
    USERID: {
      type: String,
      required: true,
    },
    comment_content: {
      type: String,
      required: true,
      default: "",
    },
    email: {
      type: String,
      require: true,
    },
    profilepicture: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommnentSchema);
export default Comment;
