const { User, Transaction } = require('../db/schema');

exports.findUser = email => User.findOne({ email: email }, 'email password');

exports.register = data => User.create(data);

exports.getInfo = id =>
  User.findOne({ _id: id }, 'name cash portfolio')
    .then(info => {
      return info;
    })
    .catch(err => {
      throw new Error(err.message);
    });

exports.addStock = async data => {
  const { userId, symbol, amount, netValue } = data;
  try {
    const user = await User.findOne({ _id: userId });
    const currentStockAmount = user.portfolio.get(symbol);

    if (!currentStockAmount) {
      user.portfolio.set(symbol, amount);
    } else {
      user.portfolio.set(symbol, currentStockAmount + amount);
    }

    user.cash -= netValue;
    await Transaction.create(data);
    user.save();
  } catch (err) {
    throw err;
  }
};
