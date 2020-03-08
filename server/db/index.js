const mongoose = require('mongoose');

const host = process.env.MONGODB_URI || 'mongodb://localhost/cashe';

mongoose
  .connect(host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(host);
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('MONGO_URI', host);
    console.error(err);
  });
