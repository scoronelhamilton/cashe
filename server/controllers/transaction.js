const Transaction = require('../models/transaction');

exports.getAll = (req, res) => {
  Transaction.getAll(req.userId)
    .then(data => res.json(data))
    .catch(e => console.error(e.message));
};
