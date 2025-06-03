const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/generateToken');

module.exports = (requiredPermissions = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = jwt.verify(token, SECRET);

      // Accepts either full access for 'admin', or specific permissions
      const hasPermission =
        payload.role === 'admin' ||
        (Array.isArray(payload.permissions) &&
          requiredPermissions.every(p => payload.permissions.includes(p)));

      if (!hasPermission) {
        return res.status(403).json({ message: 'Permission denied' });
      }

      req.user = payload;
      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  };
};
