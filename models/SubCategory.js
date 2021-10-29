const { model, Schema } = require("mongoose");
const subCategorySchema = new Schema(
  {
    parentCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("subCategory", subCategorySchema);
