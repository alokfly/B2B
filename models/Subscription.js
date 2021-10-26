const { model, Schema } = require("mongoose");
const subscriptionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = model("subscription", subscriptionSchema);
