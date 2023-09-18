import mongoose from "mongoose";

// mongoose.set("useCreateIndex", true);
// schema.index({ title: "text" });
const jobSchema = new mongoose.Schema({
  companyName: { type: String },
  website: { type: String },
  logo: { type: String },
  about: { type: String },
  jobTitle: { type: String },
  experience: { type: String },
  location: { type: String },
  applyLink: { type: String },
  salary: { type: String },
  lastDate: { type: String },
  additional: { type: String },
  postingDate: { type: Date, default: Date.now },
  jobSummary: { type: String },
});

// productsSchema.index({ name: "text", category: "text" });
let jobModel;
// const blogModel = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
try {
  jobModel = mongoose.model("Jobs");
} catch {
  jobModel = mongoose.model("Jobs", jobSchema);
}
export default jobModel;
