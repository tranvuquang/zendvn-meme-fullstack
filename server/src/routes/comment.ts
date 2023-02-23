import express from "express";
import { verifyToken } from "../middleware/auth";
import { createComment, getCommentsByPID } from "../controllers/comment";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/:id", getCommentsByPID);

export default router;
