import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  blogs: {
    type: [],
    default: [],
  }
});

const User = mongoose.model("User", userSchema);

export { User };