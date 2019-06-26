const axios = require('axios');

module.exports = {
  item: async function(req, res) {
    console.log(req.params.id);
    const { data } = await axios.get(
      `https://www.albion-online-data.com/api/v2/stats/Prices/${req.params.id}?locations`
    );
    console.log(data);
    res.json(data);
  }
};
