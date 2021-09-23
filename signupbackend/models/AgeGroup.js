const mongoose = require("mongoose");

const AgeGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const AgeGroup = mongoose.model("AgeGroup", AgeGroupSchema);
module.exports =AgeGroup;
