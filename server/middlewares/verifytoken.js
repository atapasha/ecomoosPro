const jwt = require('jsonwebtoken');
const secretKey = "123456789101";

const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({ status: 'failed', errors: 'Unauthorized: Missing or invalid token' });
  }

  const token = authorizationHeader.slice(7).replace(/\s/g, ''); // Remove 'Bearer ' from the beginning
  console.log("Auth Header:", authorizationHeader);
  console.log("Token:", token);
  
  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ status: 'failed', errors: 'Unauthorized: Invalid token', token });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
