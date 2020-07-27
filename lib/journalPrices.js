const _ = require('lodash');
const API = require('./api');

/**
 
 */

// So to calculate the returns of a journal, we first get our base values (can't remember where I got these from)
const baseValues = {
  blacksmith: [{ cloth: 1 }, { leather: 0 }, { metalbar: 7 }, { planks: 2 }],
  fletcher: [{ cloth: 0 }, { leather: 5 }, { metalbar: 3 }, { planks: 3 }],
  imbuer: [{ cloth: 5 }, { leather: 0 }, { metalbar: 1 }, { planks: 4 }],
  tinker: [{ cloth: 2 }, { leather: 1 }, { metalbar: 2 }, { planks: 4 }]
};

// This is basically the base chances of getting a returned resource to be a certain tier
// If you add up 1889, 100, 10, and 1, you get 2000, this was the calculation from the game files for determining the return rate of rare refined mats
const returnRate = [{ '.0': 1889 }, { '.1': 100 }, { '.2': 10 }, { '.3': 1 }];

// Depending on the tier of the journal, your resources will return your base values times these multipliers
const multiplier = {
  T4: 16,
  T5: 8,
  T6: 5.333,
  T7: 4.666,
  T8: 4
};

// This is the laborers multiplier, so when you hand a t7 laborer a t6 or lower journal, the multiplier will cap at 1.5
const laborerMultiplier = 1.5

// The quantity of resources from a specific journal type at a specific tier
const resourceQuantity = (type, tier) => {
  return _.flatten(
    baseValues[type].map(resource => {
      const resourceTotal = _.values(resource) * multiplier[tier] * laborerMultiplier;

      return returnRate.map(reRate => {
        return (_.values(reRate) * resourceTotal) / 20000;
      });
    })
  );
};


// Calculate the journal price by 
const journalPrice = async (type, tier) => {
  const ResourceTierPrices = await API.getResourceTierPrices(tier);
  const resourceQuantityResponse = resourceQuantity(type, tier);
  // console.log()
  const total = _.sum(
    resourceQuantityResponse.map((quantity, index) => {
      return quantity * ResourceTierPrices[index].sell_price_min;
    })
  );
  
  return _.ceil(total);
};

export default journalPrice;
