require('dotenv').config();
const express = require('express');
const next = require('next');
const session = require('express-session');
const mongoose = require('mongoose');
const logger = require('morgan');
const mongoSessionStore = require('connect-mongo');
const expressValidator = require('express-validator');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
// const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL
const app = next({ dev });
const handle = app.getRequestHandler();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions).then(() => console.log('DB connected'));

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    /* Helmet helps secure our app by setting various HTTP headers */
    server.use(helmet());
    /** Compression gives us gzip compression */
    server.use(compression());
  }

  /** Body Parser built-in to Express as on version 4.16 */
  server.use(express.json());

  /* Express Validator will validate form data sent to the backend */
  // server.use(expressValidator());

  /* give all Next.js's requests to Next.js server */
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  server.use(routes);

  server.get('*', (req, res) => {
    handle(req, res);
  });

  const MongoStore = mongoSessionStore(session);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
