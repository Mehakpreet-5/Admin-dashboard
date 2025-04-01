const express = require("express");
const Profit = require("../models/profit"); // ✅ Import the Mongoose model
const router = express.Router();

// ✅ Get all profit transactions
router.get("/api/profit", async (req, res) => {
  try {
    const profits = await Profit.find(); // Fetch all transactions

    // Calculate total profit
    const totalProfit = profits.reduce(
      (acc, item) => (item.type === "profit" ? acc + item.amount : acc - item.amount),
      0
    );

    res.json({ totalProfit, transactions: profits });
  } catch (err) {
    res.status(500).json({ message: "Error fetching profits", error: err.message });
  }
});

module.exports = router;
