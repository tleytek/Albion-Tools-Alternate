const router = require('express').Router();
const itemData = require('./items');

router.use('/item', itemData);

module.exports = router;
