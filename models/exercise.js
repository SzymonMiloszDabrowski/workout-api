const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bodyPart: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const exercises = mongoose.model('exercises', exerciseSchema);

module.exports = exercises;
