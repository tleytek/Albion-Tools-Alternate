const _ = require('lodash');
const API = require('./api');

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

const resourceQuantity = (type, tier) => {
  // console.log(type);

  const resourceQuantity = _.flatten(
    baseValues[type].map(resource => {
      const resourceTotal = _.values(resource) * multiplier[tier];

      return returnRate.map(reRate => {
        return (_.values(reRate) * resourceTotal) / 20000;
      });
    })
  );
  return resourceQuantity;
};

const journalPrice = async (type, tier) => {
  const ResourceTierPrices = await API.getResourceTierPrices(tier);
  const resourceQuantityResponse = resourceQuantity(type, tier);
  const total = _.sum(
    resourceQuantityResponse.map((quantity, index) => {
      return quantity * ResourceTierPrices[index].sell_price_min;
    })
  );
  return _.ceil(total);
};

export default journalPrice;
