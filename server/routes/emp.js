
// const express = require("express");
// const router = express.Router();
// const Emp = require("../models/emp");


// router.post("/add", async (req, res) => {
//     const newEmployee = new Emp(req.body);
//     await newEmployee.save();
//     res.send(newEmployee);
//   });
  
// router.get("/employees", async (req, res) => {
//     const employees = await Emp.find();
//     res.send(employees);
//   });

//   module.exports = router;


const express = require('express');
const router = express.Router();
const { getAllEmployees, addEmployee, updateEmployee, deleteEmployee } = require('../employeeController');

router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;