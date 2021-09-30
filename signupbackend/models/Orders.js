const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userTable",
  },
  productIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  total: {
    type: Number,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
