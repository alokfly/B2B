const { model, Schema } = require("mongoose");
const subscriptionPointSchema = new Schema(
  {
    subcriptionId: {
      type: String,
    },
    subcriptionPoints: {
      type: Number,
      required: true,
    },
    isValid: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
module.exports = model("subscriptionPoint", subscriptionPointSchema);
