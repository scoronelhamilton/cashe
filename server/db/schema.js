const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  cash: Number,
  portfolio: {
    type: Map,
    of: String
  }
});

const transactionSchema = new Schema({
  artworkId: String,
  bidderId: String,
  ownerId: String,
  value: Number,
  date: { type: Date, default: Date.now() }
});

exports.User = model('User', userSchema);
exports.Transaction = model('Transaction', transactionSchema);
