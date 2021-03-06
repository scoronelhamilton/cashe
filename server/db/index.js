const mongoose = require('mongoose');

const host = process.env.MONGODB_URI || 'mongodb://localhost/cashe';

exports.connect = () =>
  mongoose
    .connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
      throw err;
    });

exports.disconnect = () =>
  mongoose
    .disconnect()
    .then(() => console.log('Disconnected from MongoDB'))
    .catch(err => {
      throw err;
    });
