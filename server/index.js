const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const env = require('dotenv').config();

const router = require('./routes/routes');
const db = require('./db/index');

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8080;

const APP_DIRECTORY = path.join(__dirname, '../client/dist');
const ROOT_FILE = path.join(__dirname, '../client/dist/index.html');

// Middleware
if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));
if (process.env.NODE_ENV === 'prod') app.use(morgan('tiny'));
app.use(cookieParser());
app.use(bodyParser.json());

// Serve static files
app.use(express.static(APP_DIRECTORY));
app.get('*', (req, res) => {
  res.sendFile(ROOT_FILE);
});

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
