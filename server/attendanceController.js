const Employee = require('./models/attendence-Employee');

// Mark attendance for an employee
exports.markAttendance = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const employee = await Employee.findById(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    // Add attendance record
    employee.attendance.push({ date: new Date(), status });
    await employee.save();

    res.status(200).json({ message: 'Attendance marked successfully', employee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get attendance records for an employee
exports.getAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id).select('attendance');
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    res.status(200).json(employee.attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};