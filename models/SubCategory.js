const { model, Schema } = require("mongoose");
const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("subCategory", subCategorySchema);
