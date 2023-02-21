require("dotenv").config();
import Category from "../models/Category";
import { RequestExtended, ResponseExtended } from "../types";

export const createCategory = async (
  req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(201).json({ message: "category require" });
    }
    const newCategory = new Category({ text });
    const saveCategory = await newCategory.save();
    return res
      .status(200)
      .json({ status: 200, message: "success", category: saveCategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getCategories = async (
  _req: RequestExtended,
  res: ResponseExtended
) => {
  try {
    const categories = await Category.find();
    return res
      .status(200)
      .json({ status: 200, message: "success", categories });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
