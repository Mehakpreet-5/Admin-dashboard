const Sales = require("./models/Sales-Chart");

exports.getSales = async (req, res) => {
  try {
    const salesData = await Sales.findOne(); // Fetch sales data from MongoDB
    if (!salesData) {
      return res.status(404).json({ message: "Sales data not found" });
    }
    res.json(salesData);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
