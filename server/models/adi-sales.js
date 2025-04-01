const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  totalSales: Number,
  totalOrders: Number,
  countries: [{ name: String}]
});

// Prevent overwriting the model if it already exists
const Saless = mongoose.models.Saless || mongoose.model("Saless", salesSchema);

module.exports = Saless;
