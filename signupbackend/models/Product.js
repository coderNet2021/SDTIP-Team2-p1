const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  companyId: {
    type: Number,
    required: true,
  },
  productGroupId: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Number,
    required: true,
  },
  designerId: {
    type: Number,
    required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
