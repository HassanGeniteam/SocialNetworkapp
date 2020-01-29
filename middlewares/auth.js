const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = function(req, res, next) {
  //Get Token from header
  const token = require('x-auth-token');
  //Check if there is not token
  if (!token) {
    return res.status(401).json({ msg: 'No token authorization denied' });
  }
  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
