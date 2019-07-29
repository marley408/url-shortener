const express = require('express');
const router = express.Router();
const User = require('../models/User');

// route for displaying all urls for a specfic user
router.get('/history', async (req, res) => {
  // console.log(req.query);
  const user = await User.findById(req.query.userId).populate('urls');
  res.json(user.urls);
});

module.exports = router;
