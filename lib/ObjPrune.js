import _ from 'lodash';
import items from '../static/items.json';
import resources from '../static/resources.json';

const { Items } = items;
const { Resources } = resources;

const calculateRefined = (refinedRecipe) => {
  let currentRefinedRecipe = refinedRecipe;
  let fame = 0;
  let value = 0;
  const { tier } = refinedRecipe;
  let rawResource;
  let rawIndex;
  let rawObj;

  for (let i = tier; i >= 2; i--) {
    if (i === 3) {
      [rawResource] = currentRefinedRecipe.craftingrequirements.craftresource;
    } else if (i === 2) {
      rawResource = currentRefinedRecipe.craftingrequirements.craftresource;
    } else {
      [rawResource] = currentRefinedRecipe.craftingrequirements[0].craftresource;
    }

    rawIndex = Resources[_.findIndex(Resources, { name: rawResource.uniquename.substring(3) })];
    rawObj = rawIndex.ResourceTier[_.findIndex(rawIndex.ResourceTier, { value: _.toString(i) })];
    fame += rawObj.famevalue * rawResource.count;
    value += rawObj.resourcevalue * rawResource.count;

    if (i === 3) {
      currentRefinedRecipe = Items[
        _.findIndex(Items, {
          uniquename: currentRefinedRecipe.craftingrequirements.craftresource[1].uniquename,
        })
      ];
    } else if (i >= 4) {
      currentRefinedRecipe = Items[
        _.findIndex(Items, {
          uniquename: currentRefinedRecipe.craftingrequirements[0].craftresource[1].uniquename,
        })
      ];
    }
  }
  const finalItemValue = _.floor(value) * 2;
  return { fame, value: finalItemValue };
};

const calculateEquipment = (fullRecipe) => {
  let totalFameEarned = 0;
  let totalItemValue = 0;
  const craftResource = fullRecipe.craftingrequirements.craftresource;

  // Some Items have only 1 Refined Resource
  if (_.isArray(craftResource)) {
    // Looping through each resource required to create our item
    // (ie ITEM = [ {Refined Resource 1}, {Refined Resource 2} ])
    craftResource.forEach((element) => {
      const quantity = element.count;

      // Assign the "Refined Resource" to a variable so less text is required everytime we need to use it.
      const refinedResource = Items[_.findIndex(Items, { uniquename: element.uniquename })];

      // Putting our "Refined Resource" through a function to calculate the fame/value per Refined Resource

      // Summing fame/value for each element
      totalFameEarned += calculateRefined(refinedResource).fame * quantity;
      totalItemValue += calculateRefined(refinedResource).value * quantity;
    });
  } else {
    const refinedResource = Items[_.findIndex(Items, { uniquename: craftResource.uniquename })];
    totalFameEarned += calculateRefined(refinedResource).fame * craftResource.count;
    totalItemValue += calculateRefined(refinedResource).value * craftResource.count;
  }

  // assign a new key/value pair to the object argument this function was given.
  // fullRecipe.fameEarned = totalFameEarned;
  // fullRecipe.itemValue = totalItemValue;
  _.set(fullRecipe, 'fameEarned', totalFameEarned);
  _.set(fullRecipe, 'itemValue', totalItemValue);

  // Return our New Recipe
  return fullRecipe;
};

// Calculating the artifact values
const calculateArtifact = (mutableObj) => {
  const artifactElement = _.pullAt(mutableObj.craftingrequirements.craftresource, [
    mutableObj.craftingrequirements.craftresource.length - 1,
  ]);
  // Calculate the generic fame/value for the item w/o the artifact
  const newObj = calculateEquipment(mutableObj);
  // Find the Artifact piece in our JSON DB
  const artifactData = Items[_.findIndex(Items, { uniquename: artifactElement[0].uniquename })];
  // Add on additional item value from the artifact piece
  newObj.itemValue += _.toNumber(artifactData.itemvalue);
  // Addition fame due to the item being an artifact piece it static
  newObj.fameEarned += 500;

  // If we took out the artifact element, we will put it back in here.
  newObj.craftingrequirements.craftresource = _.concat(
    mutableObj.craftingrequirements.craftresource,
    artifactElement,
  );

  return newObj;
};

const ObjPrune = (obj, enchantment) => {
  // Remove unnecessary key/values
  const mutableObj = _.pick(obj, ['craftingrequirements', 'tier', 'uniquename']);

  // Array destructuring of child objects
  const [enchantOne, enchantTwo, enchantThree] = obj.enchantments.enchantment;

  // We have hoisted a child object and assigned it as a parent object
  switch (enchantment) {
    case '@1':
      _.assign(mutableObj, enchantOne);
      break;
    case '@2':
      _.assign(mutableObj, enchantTwo);
      break;
    case '@3':
      _.assign(mutableObj, enchantThree);
      break;
    default:
      break;
  }

  if (
    ['KEEPER', 'HELL', 'MORGANA', 'UNDEAD'].some(substring => obj.uniquename.includes(substring))
  ) {
    return calculateArtifact(mutableObj);
  }
  return calculateEquipment(mutableObj);
};

export default ObjPrune;
