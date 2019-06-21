const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childrenSchema = new Schema({ type: String });

const categorySchema = new Schema({
  name: { type: String, required: true },
  children: [String]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
