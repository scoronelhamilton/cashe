const User = require('../models/user');

exports.getInfo = (req, res) => {
  User.getInfo(req.userId)
    .then(info => res.json(info))
    .catch(e => {
      res.sendStatus(404);
      console.error(e);
    });
};
