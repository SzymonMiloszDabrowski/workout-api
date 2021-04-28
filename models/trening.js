const mongoose = require('mongoose');

const treningSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Bez nazwy',
  },
  exercises: [{ name: String, series: [{ weight: String, repeats: String }] }],
  username: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const trenings = mongoose.model('trenings', treningSchema);

module.exports = trenings;
