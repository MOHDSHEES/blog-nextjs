import mongoose from "mongoose";

// mongoose.set("useCreateIndex", true);
// schema.index({ title: "text" });
const blogSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  mainImg: { type: String, required: true },
  keywords: { type: String, required: true },
  category: { type: String, required: true },
  createdDate: { type: String },
  updatedDate: { type: String },
  views: { type: Number },
  comments: [],
  blog: [],
  status: { type: String, default: "Inactive" },
  user: { type: String, required: true },
});

// productsSchema.index({ name: "text", category: "text" });
let blogModel;
// const blogModel = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
try {
  blogModel = mongoose.model("Blogs");
} catch {
  blogModel = mongoose.model("Blogs", blogSchema);
}
export default blogModel;
