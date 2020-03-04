const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

const router = require('./routes/routes');
const db = require('./db/index');

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8080;

// Middleware
if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));
if (process.env.NODE_ENV === 'prod') app.use(morgan('tiny'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', router);

// Initialization
db.connect()
  .then(() => {
    httpServer.listen(PORT, e => {
      if (e) throw new Error(e.message);

      if (process.env.NODE_ENV !== 'test') {
        console.log(`Server listening on port ${PORT}...`);
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
