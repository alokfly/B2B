const { model, Schema } = require("mongoose");
const newsTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("newsType", newsTypeSchema);
