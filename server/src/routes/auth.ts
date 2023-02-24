import express from "express";
import { verifyToken } from "../middleware/auth";
import {
  login,
  register,
  getUser,
  updateUser,
  passwordUser,
} from "../controllers/auth";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/:id", verifyToken, getUser);

router.post("/update", verifyToken, updateUser);

router.post("/password", verifyToken, passwordUser);

export default router;
