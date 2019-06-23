const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  itemType: { type: String, required: true },
  tier: { type: Number, required: true },
  enchantment: { type: Number, required: true },
  uniqueName: { type: String, required: true },
  fameEarned: { type: Number }
});

const Item = mongoose.model('Item', itemSchema);
