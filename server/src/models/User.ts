import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      require: true,
      default: "",
    },
    fullname: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    yourviewed: {
      type: Number,
      default: 0,
    },
    profileviewed: {
      type: Number,
      default: 0,
    },
    youviewed: {
      type: Number,
      default: 0,
    },
    lastlogin: {
      type: String,
      default: "",
    },
    status: {
      type: Number,
      default: 0,
    },
    profilepicture: {
      type: String,
      default: "",
    },
    permission: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
