const mongoose = require("mongoose");

const profitSchema = new mongoose.Schema({
  date: String,
  amount: Number,
  type: String,
});

const Profit = mongoose.model("Profit", profitSchema);

