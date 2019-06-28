const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const craftingRequirements = new Schema({
  quantity: Number
});

const itemSchema = new Schema({
  uniqueName: { type: String, required: true },
  verboseName: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  itemType: { type: String, required: true },
  tier: { type: Number, required: true },
  enchantment: { type: Number, required: true },
  fameEarned: { type: Number, required: true },
  itemValue: { type: Number, required: true },
  craftingRequirements: [craftingRequirements]
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
