const mongoose = require('mongoose');

const { Schema } = mongoose;

const movementSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    isExpense: { type: Boolean },
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

const Movements = mongoose.model('Movements', movementSchema);

module.exports = { Movements, movementSchema };
