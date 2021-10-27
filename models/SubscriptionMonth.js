const { model, Schema } = require("mongoose");
const subscriptionMonthSchema = new Schema(
  {
    subcriptionId: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("subscriptionMonth", subscriptionMonthSchema);
