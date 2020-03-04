const { User } = require('../db/schema');

exports.getInfo = id =>
  User.find({ _id: id }, 'name cash portfolio')
    .then(info => info)
    .catch(e => {
      throw new Error(e.message);
    });

exports.register = data => User.create(data);
