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
  itemData: async function(req, res) {
    const test = await db.Item.find({ uniqueName: req.params.id });
    res.json(test);
  }
};
