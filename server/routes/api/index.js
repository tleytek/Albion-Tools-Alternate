const router = require('express').Router();
const item = require('./item');

router.use('/item', item);

module.exports = router;
