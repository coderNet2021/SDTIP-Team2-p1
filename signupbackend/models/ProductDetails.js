const { findAllByTestId } = require("@testing-library/dom");
const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema({
  
  productId: {
    type: Number,
    required: true,
  },
  saleRate:{
      type:Number,
      required: false
  },
  onSale :{
    type:Number,
    required: false
},
fromDate :{
    type:Date,
    required: false
},
toDate :{
    type:Date,
    required: false
},
});

module.exports = mongoose.model("ProductDetails", ProductDetailsSchema);
