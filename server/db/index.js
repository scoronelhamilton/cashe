const mongoose = require('mongoose');

const host = process.env.MONGODB_URI || 'mongodb://localhost/cezanne';

exports.connect = () =>
  mongoose
    .connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => {
      throw new Error(e.message);
    });

exports.disconnect = () =>
  mongoose
    .disconnect()
    .then(() => {
      console.log('Disconnected from MongoDB');
    })
    .catch(e => {
      throw new Error(e.message);
    });
