const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Trening = require('../models/trening');

router.get('/', async (req, res) => {
  try {
    const trenings = await Trening.find();
    res.json(trenings);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const trening = new Trening({
      name: req.body.name,
      exercises: req.body.exercises,
      username: req.body.username,
      date: req.body.date,
    });
    const savedTrening = await trening.save();
    res.json(savedTrening);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
