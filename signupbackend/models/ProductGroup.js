const { findAllByTestId } = require("@testing-library/dom");
const mongoose = require("mongoose");

const ProductGroupSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const ProductGroup = mongoose.model("ProductGroup", ProductGroupSchema);
module.exports =ProductGroup;
