import express from "express";
import bcrypt from "bcrypt";
import {Users} from '../Models/Users.js';
const router = express.Router();

router.post("/signup",  async(req, res) => {
  const { name, email, Password, contact } = req.body;
  const user = await Users.findOne({email})
  if (user) {
    return res.json({message: "You are already registered"});
  }
  // const hashedPassword = bcrypt.hash(Password, 10);
  const newUser = new Users({
    name,
    email,
    Password,
    mobnumber:contact,
  })
  await newUser.save();
  return res.json({message: "Succefully Sign- Up"});
});

export  {router as UserRouter};