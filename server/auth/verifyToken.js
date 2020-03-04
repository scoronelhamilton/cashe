const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);

  // Auth Header Format: Bearer {token}
  const token = authorization.split(' ')[1];
  const secret = process.env.AUTH_SECRET;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.sendStatus(401);

    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
