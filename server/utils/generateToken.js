const jwt = require('jsonwebtoken');

const SECRET = 'super-secret'; 


function generateToken(req, res) {
  const { role = 'VISITOR', permissions = ['READ'] } = req.body;

  const token = jwt.sign({ role, permissions }, SECRET, { expiresIn: '1h' });

  res.json({ token });
}


module.exports = {
  generateToken,
  SECRET,
};
