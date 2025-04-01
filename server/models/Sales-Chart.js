const mongoose = require( "mongoose");

const SalesSchema = new mongoose.Schema({
  totalSales: {
    type: Number,
    required: true,
  },
  totalOrders: {
    type: Number,
    required: true,
  },
  monthlySales: {
    type: [Number], // Array to store sales data for each month
    required: true,
  },
});

const SalesChart = mongoose.model("SalesChart", SalesSchema);
module.exports =  SalesChart;
