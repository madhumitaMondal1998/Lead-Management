const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String, required: true },
});

module.exports = mongoose.model("Lead", LeadSchema);
