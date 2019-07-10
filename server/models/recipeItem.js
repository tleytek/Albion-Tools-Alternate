const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeItemSchema = new Schema({
  uniqueName: { type: String, required: true },
  verboseName: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  itemType: { type: String, required: true },
  tier: { type: Number, required: true },
  enchantment: { type: Number, required: true },
  fameEarned: { type: Number, required: true },
  itemValue: { type: Number, required: true }
});

const RecipeItem = mongoose.model('recipeItem', recipeItemSchema, 'recipeItems');

module.exports = RecipeItem;
