import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3007, () => {
  console.log("Server running on port 3007");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
