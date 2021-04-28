const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const user = new User({
      username: req.body.username,
      password: hashPassword,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
