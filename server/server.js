const express = require('express');
const next = require('next');
const routes = require('./routes');
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');

// const db = mongoose.connect('mongodb');

nextApp.prepare().then(() => {
  //express code
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(routes);
  app.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
