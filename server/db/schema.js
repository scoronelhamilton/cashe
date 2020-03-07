const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  cash: { type: Number, default: 5000 },
  portfolio: {
    type: Map,
    of: Number,
    default: {},
  },
});

const transactionSchema = new Schema({
  type: String,
  userId: String,
  symbol: String,
  amount: Number,
  price: Number,
  netValue: Number,
  date: { type: Date, default: Date.now() },
});

exports.User = model('User', userSchema);
exports.Transaction = model('Transaction', transactionSchema);
