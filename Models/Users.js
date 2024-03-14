import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  mobnumber: {
    type: String,
    // required: true,
  }
});

const UserModel = mongoose.model("Users", UserSchema);
export { UserModel as Users };
