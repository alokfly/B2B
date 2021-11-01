const { model, Schema } = require("mongoose");
const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryId: [
      {
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true,
      },
    ],
    category_name: [
      {
        type: String,
        required: true,
      },
    ],
    subCategoryId: [
      {
        type: Schema.Types.ObjectId,
        ref: "subcategories",
        required: true,
      },
    ],
    sub_category_name: [
      {
        type: String,
        required: true,
      },
    ],
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("group", groupSchema);
