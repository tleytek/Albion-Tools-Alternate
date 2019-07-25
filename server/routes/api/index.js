const router = require('express').Router();
const item = require('./item');
const resource = require('./resource');

router.use('/item', item);
router.use('./resource', resource);

module.exports = router;
