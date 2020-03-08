const mongoose = require('mongoose');

const host = process.env.MONGOLAB_URI || 'mongodb://localhost/cashe';

mongoose
  .connect(host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.log('MONGO_URI', host);
    console.error(err);
  });
