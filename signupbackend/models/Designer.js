const mongoose = require("mongoose");

const DesignerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Designer = mongoose.model("Designer", DesignerSchema);
module.exports =Designer;
