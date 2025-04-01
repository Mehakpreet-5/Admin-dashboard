const express = require("express");
const router = express.Router();

// Dummy data for now
const dashboardData = {
  totalSales: "$15,612,545",
  totalOrders: 28265,
  topCountries: [
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "United States", flag: "🇺🇸" },
    { country: "Germany", flag: "🇩🇪" },
  ],
  statistics: {
    startDate: "March 2023",
    endDate: "April 2023",
    chartData: [200, 300, 400, 500, 600],
  },
  billing: {
    totalBill: "$5,824,213",
    breakdown: [
      { label: "Refund Amount", value: "$9,482" },
      { label: "Ordered Amount", value: "$3,134,213" },
      { label: "Due Amount", value: "$9,482" },
    ],
  },
  audience: {
    male: 46,
    female: 54,
  },
};

router.get("/dashboard", (req, res) => {
  res.json(dashboardData);
});

module.exports = router;