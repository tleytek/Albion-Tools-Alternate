const axios = require('axios');

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
    console.log(req.params.id);
  }
};
