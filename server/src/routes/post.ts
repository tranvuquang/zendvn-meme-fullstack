import express from "express";
import { verifyToken } from "../middleware/auth";
import { createPost, getPost, getPosts, updatePost } from "../controllers/post";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/:id",verifyToken, updatePost);

export default router;
