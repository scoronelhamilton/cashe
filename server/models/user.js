const { User } = require('../db/schema');

exports.findUser = email => User.findOne({ email: email }, 'email password');

exports.getInfo = id =>
  User.findOne({ _id: id }, 'name cash portfolio')
    .then(info => info)
    .catch(e => {
      throw new Error(e.message);
    });

exports.register = data => User.create(data);