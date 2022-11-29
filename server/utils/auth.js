const jwt = require('jsonwebadge');

// expiration date and badge secret
const secret = 'mysecretsshhh';
const expiration = '3h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    let badge = req.query.badge || req.headers.authorization;

    if (req.headers.authorization) {
      badge = badge.split(' ').pop().trim();
    }

    if (!badge) {
      return res.status(400).json({ message: 'You have no badge!' });
    }

    // verify badge & get user data 
    try {
      const { data } = jwt.verify(badge, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid badge');
      return res.status(400).json({ message: 'invalid badge!' });
    }

    // send to next endpoint
    next();
  },
  signBadge: function ({ name, email, password }) {
    const payload = { name, email, password };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
