import _ from 'lodash';
import items from '../static/items.json';
import resources from '../static/resources.json';

export const ObjPrune = (obj, enchantment) => {
  let newObj;
  switch (enchantment) {
    case '@0':
      newObj = _.omit(obj, ['enchantments']);
      newObj = calculateEquipment(newObj);
      return newObj;
    case '@1':
      newObj = _.pick(obj, ['enchantments', 'tier', 'uniquename']);
      calculateEquipment(newObj);
      break;
  }
};

const calculateEquipment = fullRecipe => {
  let fameEarned = 0;
  let itemValue = 0;

  if (fullRecipe.craftingrequirements.craftresource) {
  }
  fullRecipe.craftingrequirements.craftresource.forEach(element => {
    let refinedResource = items.items[_.findIndex(items.items, { uniquename: element.uniquename })];
    fameEarned += calculateRefined(refinedResource).fame * element.count;
    itemValue += calculateRefined(refinedResource).value * element.count;
  });
  fullRecipe['fameEarned'] = fameEarned;
  fullRecipe['itemValue'] = itemValue;
  return fullRecipe;
};

const calculateRefined = refinedRecipe => {
  let currentRefinedRecipe = refinedRecipe;
  let fame = 0;
  let value = 0;
  let tier = refinedRecipe.tier;
  let rawResource, rawIndex, rawObj;

  for (let i = tier; i >= 2; i--) {
    if (i == 3) {
      rawResource = currentRefinedRecipe.craftingrequirements.craftresource[0];
    } else if (i == 2) {
      // console.log(currentRefinedRecipe)
      rawResource = currentRefinedRecipe.craftingrequirements.craftresource;
    } else {
      rawResource = currentRefinedRecipe.craftingrequirements[0].craftresource[0];
    }

    rawIndex =
      resources.Resource[
        _.findIndex(resources.Resource, { name: rawResource.uniquename.substring(3) })
      ];
    rawObj = rawIndex.ResourceTier[_.findIndex(rawIndex.ResourceTier, { value: _.toString(i) })];
    fame += rawObj.famevalue * rawResource.count;
    value += rawObj.resourcevalue * rawResource.count;

    if (i == 3) {
      currentRefinedRecipe =
        items.items[
          _.findIndex(items.items, {
            uniquename: currentRefinedRecipe.craftingrequirements.craftresource[1].uniquename
          })
        ];
    } else if (i >= 4) {
      currentRefinedRecipe =
        items.items[
          _.findIndex(items.items, {
            uniquename: currentRefinedRecipe.craftingrequirements[0].craftresource[1].uniquename
          })
        ];
    }
  }
  let finalItemValue = _.floor(value) * 2;
  return { fame, value: finalItemValue };
};
