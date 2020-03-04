const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const db = require('./db/index');

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8080;

// Middleware
if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));
if (process.env.NODE_ENV === 'prod') app.use(morgan('tiny'));
app.use(bodyParser.json());

// Initialization
db.connect()
  .then(() => {
    httpServer.listen(PORT, e => {
      if (e) throw new Error(e.message);
      else {
        if (process.env.NODE_ENV !== 'test') {
          console.log(`Server listening on port ${PORT}...`);
        }
      }
    });
  })
  .catch(e => console.error(e));

// Shutdown
const shutdownGracefully = () => {
  console.log('Initializing shutdown...');
  db.disconnect()
    .catch(e => console.error(e))
    .finally(() => httpServer.close(() => console.log('Server shut down')));
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
