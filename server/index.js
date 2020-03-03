const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));
if (process.env.NODE_ENV === 'prod') app.use(morgan('tiny'));
app.use(bodyParser.json());

// INITIALIZATION
app.listen(PORT, err => {
  if (err) {
    throw new Error(err);
  } else {
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Server listening on port ${PORT}...`);
    }
  }
});
