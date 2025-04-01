// const mongoose = require("mongoose");
// const Emp = new mongoose.Schema({
//   name: String,
//   sector: String,
//   salary: Number,
// });

// module.exports = mongoose.model("Emp", Emp);


const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
  attendance: [{ date: Date, status: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', employeeSchema);