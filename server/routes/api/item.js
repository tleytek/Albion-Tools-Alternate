const router = require('express').Router();
const itemController = require('../../controller/itemController');

router.route('/data/equip/:id').get(itemController.equipItemData);
router.route('/data/recipe/:id').get(itemController.recipeItemData);
router.route('/price/:id').get(itemController.itemPrice);

module.exports = router;
