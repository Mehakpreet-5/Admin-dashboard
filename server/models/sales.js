// const mongoose = require("mongoose");

// const SalesSchema = new mongoose.Schema({
//     totalSales: Number,
//     totalOrders: Number,
//     topCountries: [String],
//     statistics: Object,
//     billing: Object,
//     audience: Object,
// });

// module.exports = mongoose.model("Sales", SalesSchema);


const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  date: String,
  amount: Number,
  category: String,
});
module.exports = mongoose.model("Sales", saleSchema);