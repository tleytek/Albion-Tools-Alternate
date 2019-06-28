const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const craftingRequirements = new Schema({
  quantity: Number
});

const itemSchema = new Schema({
  uniqueName: { type: String, required: true },

  craftingRequirements: [craftingRequirements]
});

//const Category = mongoose.model('Category', categorySchema, 'NAME_OF_COLLECTION');

const Item = mongoose.model('Item', categorySchema);

module.exports = Item;
