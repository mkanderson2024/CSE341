const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authenticationHeader = req.headers['authorization'];
  const token = authenticationHeader && authenticationHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    req.user = {
      id: decoded.sub,
      roles: decoded.roles
    };

    next();
  });
}

module.exports = authenticateToken;