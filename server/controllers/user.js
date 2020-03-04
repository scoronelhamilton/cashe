const User = require('../models/user');

exports.getInfo = (req, res) => {
  const id = 1; // TODO: get id from req body
  User.getInfo(id)
    .then(info => res.json(info))
    .catch(e => {
      res.sendStatus(404);
      console.error(e);
    });
};
