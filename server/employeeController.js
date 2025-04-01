// const Employee = require('./models/emp');

// // Get all employees
// exports.getAllEmployees = async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.status(200).json(employees);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Add a new employee
// exports.addEmployee = async (req, res) => {
//   const { name, email, salary } = req.body;
//   try {
//     const newEmployee = new Employee({ name, email, salary });
//     await newEmployee.save();
//     res.status(201).json(newEmployee);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update an employee
// exports.updateEmployee = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json(updatedEmployee);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete an employee
// exports.deleteEmployee = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Employee.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Employee deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

const Employee = require('./models/emp'); // Ensure correct path

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addEmployee = async (req, res) => {
  const { name, email, salary } = req.body;
  try {
    const newEmployee = new Employee({ name, email, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
