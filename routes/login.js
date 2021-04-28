const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/', async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send('User is not found');

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY);
  res.header('auth-token', token).json(user.username);
});

module.exports = router;
