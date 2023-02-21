require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth";
import categoryRoutes from "./routes/category";
import postRoutes from "./routes/post";

var bodyParser = require("body-parser");

const app = express();
const URI = process.env.DATABASE_URL as string;
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: ["http://localhost:3001", "http://localhost:3002"] }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/posts", postRoutes);

mongoose
  .connect(URI, {
    autoIndex: false,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.log("err", err.message);
  });
