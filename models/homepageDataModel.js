import mongoose from "mongoose";

// mongoose.set("useCreateIndex", true);
// schema.index({ title: "text" });
const homepageDataSchema = new mongoose.Schema({
  recent: [{}],
  categoryData: {},
});

// productsSchema.index({ name: "text", category: "text" });
// const HomepageDataModel =
//   mongoose.models.HomepageData ||
//   mongoose.model("HomepageData", homepageDataSchema);

let HomepageDataModel;
// const blogModel = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
try {
  HomepageDataModel = mongoose.model("HomepageData");
} catch {
  HomepageDataModel = mongoose.model("HomepageData", homepageDataSchema);
}
// module.exports =HomepageDataModel;
export default HomepageDataModel;
