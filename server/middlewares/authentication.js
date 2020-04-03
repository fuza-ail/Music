const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  try {
    const token = req.headers.access_token;
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.UserId = decoded.UserId;
      req.email = decoded.UserEmail;
      next()
    } else {
      res.status(404).json({ error: 'token not found' })
    }
  }
  catch(err){
    res.status(500).json(err)
  }
}

module.exports = authentication;