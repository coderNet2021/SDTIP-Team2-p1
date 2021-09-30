const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  company: {
    type: Schema.Types.ObjectId,
    //required: true,
    ref: "Company",
  },
  productGroup: {
    type: Schema.Types.ObjectId,
    //required: true,
    ref: "ProductGroup",
  },
  ageGroup: {
    type: Schema.Types.ObjectId,
    //required: true,
    ref: "AgeGroup",
  },
  category: {
    type: Schema.Types.ObjectId,
    //required: true,
    ref: "Category",
  },
  designer: {
    type: Schema.Types.ObjectId,
    //required: true,
    ref: "Designer",
  },
  gender: {
    type: String,
    //required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
