const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
