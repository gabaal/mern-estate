import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3007, () => {
  console.log("Server running on port 3007");
});

app.use("/api/user", userRouter);
