const express = require('express');
const router = express.Router();
const Sales = require("../models/adi-sales")

router.get("/api/saless", async (req, res) => {
    try {
      const salesData = await Sales.findOne(); // Fetch first sales record
      res.json(salesData);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  });

  module.exports = router;