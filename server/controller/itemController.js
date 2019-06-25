const axios = require('axios');

module.exports = {
  item: async function(req, res) {
    console.log(req.params.id);
    // const { data } = await axios.get(
    //   `https://www.albion-online-data.com/api/v1/stats/Prices/${req.params.id}`
    // );
    // return data;
  }
};
