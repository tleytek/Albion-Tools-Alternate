const router = require('express').Router();
const itemController = require('../../controller/itemController');

router.route('/:id').get(itemController.item);

module.exports = router;
