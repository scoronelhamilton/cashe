const { Transaction } = require('../db/schema');

exports.getAll = userId => Transaction.find({ userId });

exports.addOne = data => Transaction.create(data);
