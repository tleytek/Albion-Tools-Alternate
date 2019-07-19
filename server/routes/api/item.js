const router = require('express').Router();
const itemController = require('../../controller/itemController');

router.route('/data/:id').get(itemController.itemData);
router.route('/price/:id/:city').get(itemController.itemPrice);

module.exports = router;
