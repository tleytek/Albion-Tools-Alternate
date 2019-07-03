const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipItemSchema = new Schema({
  uniqueName: { type: String, required: true },
  verboseName: { type: String },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  itemType: { type: Number, required: true },
  tier: { type: Number, required: true },
  enchantment: { type: Number, required: true }
});

const EquipItem = mongoose.model('equipItem', equipItemSchema, 'equipItems');

module.exports = EquipItem;
