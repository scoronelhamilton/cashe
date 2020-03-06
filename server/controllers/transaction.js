const Transaction = require('../models/transaction');
const User = require('../models/user');

exports.getAll = (req, res) => {
  Transaction.getAll(req.userId)
    .then(data => res.json(data))
    .catch(e => console.error(e.message));
};

exports.addOne = (req, res) => {
  const { userId } = req;
  const { data } = req.body;
  data.userId = userId;

  User.getInfo(userId)
    .then(({ cash }) => {
      if (cash < data.netAmount) {
        return res.sendStatus(422);
      }
      return User.updatePortfolio(data);
    })
    .then(() => res.sendStatus(201))
    .catch(e => res.sendStatus(500));
};
