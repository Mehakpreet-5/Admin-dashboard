const express = require('express');
const router = express.Router();
const { markAttendance, getAttendance } = require('../attendanceController');

// Mark attendance for an employee
router.post('/:id/mark', markAttendance);

// Get attendance records for an employee
router.get('/:id', getAttendance);

module.exports = router;