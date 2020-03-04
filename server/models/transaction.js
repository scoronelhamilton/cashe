const { Transaction } = require('../db/schema');

exports.getAll = userId => Transaction.find({ _id: userId });
