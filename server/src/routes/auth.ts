import express from "express";
import { verifyToken } from "../middleware/auth";
import { login, register, getUser } from "../controllers/auth";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/:USERID", verifyToken, getUser);

export default router;
