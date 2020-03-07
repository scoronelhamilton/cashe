const User = require('../models/user');
const Transaction = require('../models/transaction');
const { getLastPrice } = require('../services/iexAPI');

exports.getInfo = (req, res) => {
  User.getInfo(req.userId)
    .then(info => res.json(info))
    .catch(e => {
      res.sendStatus(404);
      console.error(e);
    });
};

exports.buyStock = (req, res) => {
  const { symbol, amount } = req.body;
  const { userId } = req;

  Promise.all([User.getInfo(userId), getLastPrice(symbol)])
    .then(results => {
      const { cash } = results[0];
      const { price } = results[1].data[0];

      const netValue = amount * price;
      if (cash < amount * price) return res.sendStatus(422);

      const data = {
        type: 'Buy',
        userId,
        symbol,
        amount,
        price,
        netValue,
      };

      User.addStock(data)
        .then(() => Transaction.addOne(data))
        .then(() => res.status(201).json(data))
        .catch(err => {
          throw err;
        });
    })
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};
