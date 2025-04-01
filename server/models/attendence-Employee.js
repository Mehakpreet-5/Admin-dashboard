const mongoose = require('mongoose');

const attendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
  attendance: [
    {
      date: { type: Date, default: Date.now },
      status: { type: String, enum: ['Present', 'Absent', 'Leave'], default: 'Present' },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('attend', attendSchema);