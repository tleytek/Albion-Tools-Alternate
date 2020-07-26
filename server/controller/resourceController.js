const axios = require('axios');

module.exports = {
  async resourcePrice(req, res) {
    const { tier } = req.params;
    const resources = `${tier}_CLOTH,${tier}_CLOTH_LEVEL1@1,${tier}_CLOTH_LEVEL2@2,${tier}_CLOTH_LEVEL3@3,${tier}_LEATHER,${tier}_LEATHER_LEVEL1@1,${tier}_LEATHER_LEVEL2@2,${tier}_LEATHER_LEVEL3@3,${tier}_METALBAR,${tier}_METALBAR_LEVEL1@1,${tier}_METALBAR_LEVEL2@2,${tier}_METALBAR_LEVEL3@3,${tier}_PLANKS,${tier}_PLANKS_LEVEL1@1,${tier}_PLANKS_LEVEL2@2,${tier}_PLANKS_LEVEL3@3`;
    const { data } = await axios.get(
      `https://www.albion-online-data.com/api/v2/stats/prices/${resources}?locations=Caerleon&qualities=1`
    );
    res.json(data);
  }
};
