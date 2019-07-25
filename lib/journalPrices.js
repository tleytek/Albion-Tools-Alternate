const _ = require('lodash');
const axios = require('axios');
// const API = require('./api');

// Cloth
// Leather
// Metalbar
// Planks
const baseValues = {
  blacksmith: [{ cloth: 1 }, { leather: 0 }, { metalbar: 7 }, { planks: 2 }],
  fletcher: [{ cloth: 0 }, { leather: 5 }, { metalbar: 3 }, { planks: 3 }],
  imbuer: [{ cloth: 5 }, { leather: 0 }, { metalbar: 1 }, { planks: 4 }],
  tinker: [{ cloth: 2 }, { leather: 1 }, { metalbar: 2 }, { planks: 4 }]
};

const returnRate = [{ '.0': 1889 }, { '.1': 100 }, { '.2': 10 }, { '.3': 1 }];

const multiplier = {
  T4: 16,
  T5: 8,
  T6: 5.333,
  T7: 4.666,
  T8: 4
};

const resourcePrices = async tier => {
  const resources = `${tier}_CLOTH,${tier}_CLOTH_LEVEL1@1,${tier}_CLOTH_LEVEL2@2,${tier}_CLOTH_LEVEL3@3,${tier}_LEATHER,${tier}_LEATHER_LEVEL1@1,${tier}_LEATHER_LEVEL2@2,${tier}_LEATHER_LEVEL3@3,${tier}_METALBAR,${tier}_METALBAR_LEVEL1@1,${tier}_METALBAR_LEVEL2@2,${tier}_METALBAR_LEVEL3@3,${tier}_PLANKS,${tier}_PLANKS_LEVEL1@1,${tier}_PLANKS_LEVEL2@2,${tier}_PLANKS_LEVEL3@3`;
  const { data } = await axios.get(
    `https://www.albion-online-data.com/api/v2/stats/Prices/${resources}?locations=Caerleon&qualities=1`
  );
  return data;
};

const resourceQuantity = (type, tier) => {
  return _.flatten(
    baseValues[type].map(resource => {
      const resourceTotal = _.values(resource) * multiplier[tier];

      return returnRate.map(reRate => {
        return (_.values(reRate) * resourceTotal) / 20000;
      });
    })
  );
};

const journalPrice = async (type, tier) => {
  const resourcePricesResponse = await resourcePrices(tier);
  const resourceQuantityResponse = await resourceQuantity(type, tier);
  const total = _.sum(
    resourceQuantityResponse.map((quantity, index) => {
      return quantity * resourcePricesResponse[index].sell_price_min;
    })
  );
  console.log(total * 38);

  return total;
};

console.log(journalPrice('blacksmith', 'T7'));
// export default multiplier;
