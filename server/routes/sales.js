// const express = require("express");
// const router = express.Router();
// const Sales = require("../models/sales");

// router.get("/data", async (req, res) => {
//     try {
//         const data = await Sales.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Sale = require("../models/sales"); // Ensure you have this model


// Get all sales & total revenue
router.get("/", async (req, res) => {
    try {
      const sales = await Sale.find();
      const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);
      res.json({ sales, totalRevenue });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

module.exports = router;
