import express from "express";
import { verifyToken } from "../middleware/auth";
import { createComment, deleteComment, getCommentsByPID } from "../controllers/comment";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/:id", getCommentsByPID);
router.delete("/delete",verifyToken, deleteComment);

export default router;
