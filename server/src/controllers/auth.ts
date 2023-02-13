require("dotenv").config();
import jwt from "jsonwebtoken";
import User from "../models/User";
import { RequestExtended, ResponseExtended } from "../types";

/* REGISTER USER */
export const register = async (req: RequestExtended, res: ResponseExtended) => {
  try {
    // const { email } = req.body;

    // const user = await User.findOne({ email: email as string });
    // if (user) {
    //   return res.status(400).json({ msg: "User already exist" });
    // }
    // const newUser = new User(req.body);
    // const savedUser = await newUser.save();
    // return res.status(201).json(savedUser);
    console.log(req.body);
    return res.json({ success: true });
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
        const { password, ...userData } = user as any;
        const { _id, email, username, isAdmin } = user as any;
        const token = { _id, email, username, isAdmin };
        const accessToken = jwt.sign(token, process.env.JWT as string);
        return res.status(200).json({ accessToken, user: userData });
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
