import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ENV } from "./config/env.js";
import connectDB from "./config/db.js";
const app = express();

const port = ENV.PORT;

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} at http://localhost:${port}`);
  connectDB();
});
