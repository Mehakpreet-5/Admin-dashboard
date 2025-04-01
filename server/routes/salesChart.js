const express = require("express");
const router = express.Router();
const {getSales } = require("../salesController");

router.get("/", getSales);

module.exports = router;
