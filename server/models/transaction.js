const { Transaction } = require('../db/schema');

exports.getAll = userId => Transaction.find({ userId }).sort({ date: 'desc' });

exports.addOne = data => Transaction.create(data);
