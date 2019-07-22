const jwt = require('jsonwebtoken');

// middleware function. this can be added to any route to create a private route. no one can access it without the correct token.
module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};
