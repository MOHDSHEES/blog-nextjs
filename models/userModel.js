import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  fname: { type: String },
  lname: { type: String, required: true },
  password: { type: String, required: true },
  blog: [{ type: String }],
  isAdmin: { type: Boolean, default: false },
});

// productsSchema.index({ name: "text", category: "text" });
const userModel = mongoose.models.Users || mongoose.model("Users", userSchema);
// module.exports =  userModel;
export default userModel;
