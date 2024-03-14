import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Db/index.js";
import { UserRouter } from "./routes/User.js";
dotenv.config();

const app = express();
app.use(cors());
connectDB();
app.use(express.json())
app.use('/auth', UserRouter)

app.get("/", (req, res) => {
  res.send("Starting the first api !");
});

app.listen(process.env.PORT, () => {
  console.log(`Running on the Port number ${process.env.PORT}`);
});
