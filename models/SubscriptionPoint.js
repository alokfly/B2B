const { model, Schema } = require("mongoose");
const subscriptionPointSchema = new Schema(
  {
    subcriptionId: {
      type: String,
    },
    subcriptionPoints: {
      type: String,
      required: true,
    },
    isValid: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = model("subscriptionPoint", subscriptionPointSchema);
