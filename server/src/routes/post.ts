import express from "express";
import { verifyToken } from "../middleware/auth";
import { createPost, getPosts } from "../controllers/post";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/", getPosts);

export default router;
