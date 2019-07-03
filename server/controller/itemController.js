const axios = require('axios');
const db = require('../models');
const _ = require('lodash');
module.exports = {
  itemPrice: async function(req, res) {
    const { data } = await axios.get(
      `https://www.albion-online-data.com/api/v2/stats/Prices/${
        req.params.id
      }?locations=Black%20Market&qualities=1`
    );
    res.json(data);
  },
  equipItemData: async function(req, res) {
    const response = await db.EquipItem.find({ uniqueName: req.params.id });
    res.json(response);
  },
  recipeItemData: async function(req, res) {
    const response = await db.RecipeItem.find({ uniqueName: req.params.id });
    res.json(response);
  }
};
