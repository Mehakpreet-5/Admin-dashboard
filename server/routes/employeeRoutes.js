const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// ➤ GET all Employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(emp => emp.status === "Active").length;
    const newEmployees = employees.slice(-5);

    res.json({ totalEmployees, activeEmployees, newEmployees, employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ POST Create Employee
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ➤ PUT Update Employee
router.put("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ➤ DELETE Employee
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
