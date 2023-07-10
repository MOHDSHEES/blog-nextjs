import mongoose from "mongoose";

// mongoose.set("useCreateIndex", true);
// schema.index({ title: "text" });

const blogSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => Math.random(),
    index: { unique: true },
  },
  title: { type: String, unique: true, required: true },
  mainImg: { type: String, required: true },
  description: { type: String, required: true },
  keywords: { type: String, required: true },
  category: { type: String, required: true },
  createdDate: { type: String },
  updatedDate: { type: String },
  views: { type: Number },
  comments: [],
  blog: { type: String, required: true },
  status: { type: String, default: "Inactive" },
  user: { type: String, required: true },
});

// productsSchema.index({ name: "text", category: "text" });
let uBlogModel;
// const blogModel = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
try {
  uBlogModel = mongoose.model("UBlogs");
} catch {
  uBlogModel = mongoose.model("UBlogs", blogSchema);
}
export default uBlogModel;
