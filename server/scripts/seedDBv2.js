const { Console } = require('console')
const fs = require('fs')
const _ = require('lodash')
const itemDB = require('../../static/itemDB.json')
let object = itemDB.items.equipmentitem.map(item => _.pick(item,['_uniquename', 'craftingrequirements', 'enchantments.enchantment', '_tier' ]))

fs.writeFile('test.json', JSON.stringify(object, null, 4), (err) => {
  if (err) console.log(err);
  console.log('Success')
})