import express from "express";
import { createCategory, getCategories } from "../controllers/category";

const router = express.Router();

router.post("/create", createCategory);
router.get("/", getCategories);

export default router;
