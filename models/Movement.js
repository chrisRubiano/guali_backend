const mongoose = require('mongoose');

const { Schema } = mongoose;

const movementSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  isExpense: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = { Movement, movementSchema };
