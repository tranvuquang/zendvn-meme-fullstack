require("dotenv").config();
import jwt from "jsonwebtoken";
import User from "../models/User";
import { RequestExtended, ResponseExtended } from "../types";

/* REGISTER USER */
export const register = async (req: RequestExtended, res: ResponseExtended) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email as string });
    if (user) {
      return res.status(400).json({ msg: "User already exist" });
    }
    const newUser = new User(req.body);
    let savedUser = (await newUser.save()) as any;
    savedUser = savedUser._doc;
    const { username, permission } = savedUser;
    let { password, _id, ...userData } = savedUser;
    userData = { ...userData, USERID: _id };
    const token = { USERID: _id, email, username, permission };
    const accessToken = jwt.sign(token, process.env.JWT as string);
    return res
      .status(201)
      .json({ user: userData, status: 200, message: "success", accessToken });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req: RequestExtended, res: ResponseExtended) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User does not exist or wrong password. " });
    } else {
      if (password === user.password) {
        user = (user as any)._doc;
        const { email, username, permission, _id } = user as any;
        const token = { USERID: _id, email, username, permission };
        const accessToken = jwt.sign(token, process.env.JWT as string);
        return res.status(200).json({
          accessToken,
          status: 200,
          user: {
            USERID: _id,
            email,
            username,
            permission,
          },
          message: "success",
        });
      } else {
        return res
          .status(400)
          .json({ msg: "User does not exist or wrong password. " });
      }
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req: RequestExtended, res: ResponseExtended) => {
  try {
    const { USERID } = req.params;
    let user = (await User.findById(USERID)) as any;
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User does not exist" });
    }
    user = (user as any)._doc;
    const userData = { ...user, USERID: user._id, password: "" };
    return res.status(200).json({
      status: 200,
      user: userData,
      message: "success",
    });
    
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
