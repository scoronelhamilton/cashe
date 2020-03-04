const { User } = require('../db/schema');

exports.getInfo = id =>
  User.findById(id, 'name cash portfolio')
    .then(info => info)
    .catch(e => {
      throw new Error(e.message);
    });
