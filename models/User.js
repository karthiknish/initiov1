import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide your message."],
  },
  role: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
