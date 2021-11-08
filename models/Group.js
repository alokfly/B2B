const { model, Schema } = require("mongoose");
const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true,
      },
    ],
    sub_category_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "subcategories",
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
