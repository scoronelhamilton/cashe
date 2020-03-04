const { User } = require('../db/schema');

exports.findUser = email => User.find({ email: email }, 'email password');

exports.getInfo = id =>
  User.find({ _id: id }, 'name cash portfolio')
    .then(info => info)
    .catch(e => {
      throw new Error(e.message);
    });

exports.register = data => User.create(data);
