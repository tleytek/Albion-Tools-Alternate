require('dotenv').config();
const express = require('express');
const next = require('next');
const session = require('express-session');
const mongoose = require('mongoose');
const logger = require('morgan');
const mongoSessionStore = require('connect-mongo');
const helmet = require('helmet');
const compression = require('compression');
const NATS = require('nats');

const natsSubscribe = require('./nats');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
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

// const nc = NATS.connect('nats://public:thenewalbiondata@www.albion-online-data.com:4222', {
//   json: true
// });

// nc.subscribe('marketorders.deduped', msg => {
//   if (msg.LocationId == 3005) {
//     console.log(msg)
//   }
//   // console.log(msg)

//   natsSubscribe(msg);
// });

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

  const MongoStore = mongoSessionStore(session);
  const sessionConfig = {
    name: 'albion-tools.sid',
    // secret used for using signed cookies w/ the session
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60 // save session for 14 days
    }),
    // forces the session to be saved back to the store
    resave: false,
    // don't save unmodified sessions
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
    }
  };

  if (!dev) {
    sessionConfig.cookie.secure = true; // serve secure cookies in production environment
    server.set('trust proxy', 1); // trust first proxy
  }

  /* Apply our session configuration to express-session */
  server.use(session(sessionConfig));

  /* morgan for request logging from client
  - we use skip to ignore static files from _next folder */
  server.use(
    logger('dev', {
      skip: req => req.url.includes('_next')
    })
  );

  server.use('/', routes);

  /* Error handling from async / await functions */
  server.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json(message);
  });

  /* default route
     - allows Next to handle all other routes
     - includes the numerous `/_next/...` routes which must    be exposedfor the next app to work correctly
     - includes 404'ing on unknown routes */
  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
