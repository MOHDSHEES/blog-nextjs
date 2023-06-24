import mongoose from "mongoose";

// mongoose.set("useCreateIndex", true);
// schema.index({ title: "text" });
const categoriesSchema = new mongoose.Schema({
  categories: [{}],
});

// productsSchema.index({ name: "text", category: "text" });
const categoriesModel =
  mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);

// module.exports =  categoriesModel;
export default categoriesModel;
