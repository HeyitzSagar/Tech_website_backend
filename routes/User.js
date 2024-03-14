import express from "express";
import bcrypt from "bcrypt";
import { Users } from "../Models/Users.js";
const router = express.Router();
import jwt from 'jsonwebtoken';
// this endpoint is for the login
router.post("/login", async (req, res) => {
  const { email, Password } = req.body;
  const user = await Users.findOne(email);
  if (!user) {
    return res.json({ message: "User is not Registered" });
  }
  const validPassword = await bcrypt.compare(Password, user.Password);
  if (!validPassword) {
    return res.json({ message: "Invalid Password !!" });
  }
  

});

// this endpoint is for the signup
router.post("/signup", async (req, res) => {
  const { name, email, Password, mobnumber } = req.body;
  const user = await Users.findOne({ email });
  if (user) {
    return res.json({ message: "You are already registered" });
  }
  const hashedPassword = bcrypt.hash(Password, 10);
  const newUser = new Users({
    name,
    email,
    Password: hashedPassword, // hashing password for using bcrypt for more masking
    mobnumber,
  });
  await newUser.save();
  return res.json({ message: "Succefully Sign- Up" });
});

export { router as UserRouter };
