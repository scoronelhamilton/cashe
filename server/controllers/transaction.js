const Transaction = require('../models/transaction');

exports.getAll = (req, res) => {
  const { userId } = req;

  Transaction.getAll(userId)
    .then(data => res.json(data))
    .catch(e => console.error(e.message));
};
