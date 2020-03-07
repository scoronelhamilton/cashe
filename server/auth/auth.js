const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.verify = (req, res) => {
  res.sendStatus(200);
};

exports.register = (req, res) => {
  const { name, lastName, email, password } = req.body;
  const formatedEmail = email.toLowerCase();
  const salt = 10;
  const hashedPassword = bcrypt.hashSync(password, salt);
  const tokenExpiration = 900; // 15 minutes;

  User.findUser(formatedEmail)
    .then(user => {
      if (user) return res.sendStatus(409);

      User.register({
        name: name.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: formatedEmail,
        password: hashedPassword,
      }).then(({ _id }) => {
        const secret = process.env.AUTH_SECRET;
        const token = jwt.sign({ id: _id }, secret, {
          expiresIn: tokenExpiration,
        });
        res.status(201).json({ auth: true, token: token });
      });
    })
    .catch(e => {
      res.sendStatus(500);
      console.error(e.message);
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const tokenExpiration = 900; // 15 minutes;

  User.findUser(email.toLowerCase())
    .then(user => {
      if (!user) {
        console.log(email, password);
        return res.sendStatus(401);
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) return res.sendStatus(401);

      const secret = process.env.AUTH_SECRET;
      const token = jwt.sign({ id: user._id }, secret, {
        expiresIn: tokenExpiration,
      });
      res.status(201).json({ auth: true, token: token });
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

exports.logout = (req, res) => {
  res.sendStatus(200);
};
