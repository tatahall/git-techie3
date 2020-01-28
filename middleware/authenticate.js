const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check to see if the token is in the header; if not then...
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // if there is a token, we pass in the token to verify it and pull out the token payload
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // the request object is set equal to the user portion of the token payload so we have access to it inside the route
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
