const jwt = require('jsonwebtoken');

// expiration date and badge secret
const secret = 'mysecretsshhh';
const expiration = '3h';


module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    console.log("token", token)


    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    }
    catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign(
      { data: payload },
      secret,
      { expiresIn: expiration }
    );
  }
};
//   // function for our authenticated routes
//   authMiddleware: function (req, res, next) {
//     let token = req.query.badge || req.headers.authorization;

//     if (req.headers.authorization) {
//       badge = badge.split(' ').pop().trim();
//     }

//     if (!badge) {
//       return res.status(400).json({ message: 'You have no badge!' });
//     }

//     // verify badge & get user data 
//     try {
//       const { data } = jwt.verify(badge, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log('Invalid badge');
//       return res.status(400).json({ message: 'invalid badge!' });
//     }

//     // send to next endpoint
//     next();
//   },
//   signBadge: function ({ name, email, password }) {
//     const payload = { name, email, password };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };
