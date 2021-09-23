const mongoose = require("mongoose");

const CouponsSchema = new mongoose.Schema({
  
  code: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    // required: true,
  },
  endDate: {
    type: Date,
    // required: true,
  },
  percentage: {
    type: Number,
    // required: true,
  },
  emails: {
    type: Object,
    // required: true,
  },
  criteria: {
    type: Object,
    // required: true,
  },
  
  category: {
    type: Object,
    // required: true,
  },
  
});

const SalesCoupons = mongoose.model("Coupons", CouponsSchema);
module.exports =SalesCoupons;
