const router = require('express').Router();
const resourceController = require('../../controller/resourceController');

router.route('/price/:tier').get(resourceController.resourcePrice);

module.exports = router;
