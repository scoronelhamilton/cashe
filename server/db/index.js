const mongoose = require('mongoose');
const host =
  'mongodb://heroku_c1mr2xcj:heroku_c1mr2xcj@ds011873.mlab.com:11873/heroku_c1mr2xcj';

exports.connect = () =>
  mongoose
    .connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
