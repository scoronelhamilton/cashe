const User = require('../models/user');

exports.getInfo = (req, res) => {
  const id = '5e5f1333c7102d5742ee271c'; // TODO: get id from req body
  User.getInfo(id)
    .then(info => res.json(info))
    .catch(e => {
      res.sendStatus(404);
      console.error(e);
    });
};

exports.register = (req, res) => {
  const data = {
    //TODO: GET DATA FROM REQ BODY
    name: 'sebs',
    lastName: 'coro',
    email: 's@gmail.com',
    portfolio: {
      APL: 2,
      FBB: 3
    }
  };

  User.register(data)
    .then(data => res.send(data))
    .catch(e => {
      res.sendStatus(500);
      console.error(e.message);
    });
};
