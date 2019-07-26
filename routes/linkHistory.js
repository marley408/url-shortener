const express = require('express');
const router = express.Router();
const User = require('../models/User');

// route for displaying all urls for a specfic user
router.get('/history', async (req, res) => {
  const user = await User.findById('5d3a0f853d4b9305eefc6c8b').populate('urls');

  console.log(user);
  res.json(user.urls);
});

module.exports = router;
