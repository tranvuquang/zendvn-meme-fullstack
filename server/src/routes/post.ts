import express from "express";
import { verifyToken } from "../middleware/auth";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getPostsListPagination,
  getSearchPosts,
  updatePost,
} from "../controllers/post";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/", getPosts);
router.get("/getPostListPagination", getPostsListPagination);
router.get("/search", getSearchPosts);
router.get("/:id", getPost);
router.post("/:id", verifyToken, updatePost);
router.delete("/delete", verifyToken, deletePost);

export default router;
