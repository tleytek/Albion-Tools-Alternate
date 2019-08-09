const _ = require('lodash');
const fs = require('fs');
const ItemTypes = require('../ItemTypes.json');
const EquipmentItems = require('../items.json');
const ObjPrune = require('./ObjPrune');

const tiers = ['T4', 'T5', 'T6', 'T7', 'T8'];
const enchantments = ['', '@1', '@2', '@3'];
const arrays = _.values(ItemTypes);
const flatArray = _.flatten(arrays);
const values = flatArray.map(element => {
  return element.value;
});
const EquipmentItemArray = [];
values.forEach(itemName => {
  return tiers.forEach(tier => {
    const index = _.findIndex(EquipmentItems, { uniquename: `${tier}${itemName}` });
    return enchantments.forEach(enchantment => {
      const EquipmentItem = ObjPrune(EquipmentItems[index], enchantment);
      EquipmentItemArray.push(EquipmentItem);
    });
  });
});

const data = JSON.stringify(EquipmentItemArray, null, 2);

fs.writeFile('../BlackMarketItems.json', data, err => {
  if (err) throw err;
  console.log('Data written to file');
});

console.log(EquipmentItemArray);
