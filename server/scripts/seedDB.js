require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
// console.log(process.env.PORT);
const CategorySeed = [
  {
    name: 'Categories',
    children: ['Accessories', 'Armor', 'Magic', 'Melee', 'Off-Hand', 'Ranged']
  },
  {
    name: 'Acessories',
    children: ['Bag', 'Cape']
  },
  {
    name: 'Armor',
    children: [
      'Cloth Armor',
      'Cloth Helmet',
      'Cloth Shoes',
      'Leather Armor',
      'Leather Helmet',
      'Leather Shoes',
      'Plate Armor',
      'Plate Helmet',
      'Plate Shoes'
    ]
  },
  {
    name: 'Magic',
    children: [
      'Arcane Staff',
      'Cursed Staff',
      'Fire Staff',
      'Frost Staff',
      'Holy Staff',
      'Nature Staff'
    ]
  },
  {
    name: 'Melee',
    children: ['Axe', 'Dagger', 'Hammer', 'Mace', 'Quarterstaff', 'Spear', 'Sword']
  },
  {
    name: 'Off-Hand',
    children: ['Book', 'Horn', 'Orb', 'Shield', 'Torch', 'Totem']
  },
  {
    name: 'Ranged',
    children: ['Bow', 'Crossbow']
  }
];

db.BlackMarket.deleteMany({})
  .then(() => db.BlackMarket.collection.insertMany(CategorySeed))
  .then(data => {
    console.log(data.result.n + ' categories added');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
