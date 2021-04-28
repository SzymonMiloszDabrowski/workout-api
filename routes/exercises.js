const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const exercise = new Exercise({
      name: req.body.name,
      category: req.body.category,
      bodyPart: req.body.bodyPart,
      username: req.body.username,
    });
    const savedExercise = await exercise.save();
    res.json(savedExercise);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
