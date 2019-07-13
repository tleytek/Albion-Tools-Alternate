const axios = require('axios');
const db = require('../models');

module.exports = {
  async itemPrice(req, res) {
    const { data } = await axios.get(
      `https://www.albion-online-data.com/api/v2/stats/Prices/${
        req.params.id
      }?locations=${encodeURIComponent(req.params.city)}&qualities=1`
    );
    res.json(data[0]);
  }
};
