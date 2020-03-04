const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  cash: { type: Number, default: 5000 },
  portfolio: {
    type: Map,
    of: String,
    default: {}
  }
});

const transactionSchema = new Schema({
  type: String,
  userId: String,
  ticker: String,
  shares: Number,
  costPerShare: Number,
  netAmount: Number,
  date: { type: Date, default: Date.now() }
});

exports.User = model('User', userSchema);
exports.Transaction = model('Transaction', transactionSchema);
