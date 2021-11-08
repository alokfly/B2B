const { model, Schema } = require("mongoose");
const newsContentSchema = new Schema(
  {
    newsTypeId: {
      type: Schema.Types.ObjectId,
      ref: "newsTypes",
      required: true,
    },
    newsTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("newsContent", newsContentSchema);
