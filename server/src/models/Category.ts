import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;
