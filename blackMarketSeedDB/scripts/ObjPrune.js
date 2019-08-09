const _ = require('lodash');
const Items = require('../items.json');
const Resources = require('../resources.json');
const itemNames = require('../itemNames.json');
const artifactNames = require('../localizationNew.json');

/* The verboseName function takes the uniqueName and 
   finds its corresponding verboseName in another file */
const verboseName = uniquename => {
  return itemNames[_.findIndex(itemNames, { UniqueName: uniquename })].LocalizedNames[0].Value;
};

const verboseArtifact = artifactName => {
  const result = artifactNames.filter(element => {
    // eslint-disable-next-line no-underscore-dangle
    return element._attributes.tuid === `@ITEMS_${artifactName}`;
  });
  // eslint-disable-next-line no-underscore-dangle
  return result[0].tuv[0].seg._text;
};
const calculateRefined = refinedRecipe => {
  let currentRefinedRecipe = refinedRecipe;
  let fame = 0;
  let value = 0;
  const { tier } = refinedRecipe;
  let rawResource;
  let rawIndex;
  let rawObj;

  // eslint-disable-next-line no-plusplus
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
      currentRefinedRecipe =
        Items[
          _.findIndex(Items, {
            uniquename: currentRefinedRecipe.craftingrequirements.craftresource[1].uniquename
          })
        ];
    } else if (i >= 4) {
      currentRefinedRecipe =
        Items[
          _.findIndex(Items, {
            uniquename: currentRefinedRecipe.craftingrequirements[0].craftresource[1].uniquename
          })
        ];
    }
  }
  const finalItemValue = _.floor(value) * 2;
  return { fame, value: finalItemValue };
};

const calculateEquipment = (fullRecipe, enchantment) => {
  let totalFameEarned = 0;
  let totalItemValue = 0;
  const enchantRegex = /@[0-9]/g;
  const craftResource = _.castArray(fullRecipe.craftingrequirements.craftresource);

  craftResource.forEach((element, index) => {
    const resource = element;
    const quantity = resource.count;
    let { uniquename } = resource;

    uniquename = uniquename.replace(enchantRegex, '');

    const refinedResource = Items[_.findIndex(Items, { uniquename })];

    // Calculate the fame/value per Refined Resource
    const calculated = calculateRefined(refinedResource);
    // Summing fame/value for each element
    totalFameEarned += calculated.fame * quantity;
    totalItemValue += calculated.value * quantity;

    // More bad object manipulation
    craftResource[index].uniquename = `${uniquename}${enchantment}`;

    // Assign the verboseName
    resource.verboseName = verboseName(craftResource[index].uniquename);
  });

  // assign a new key/value pair to the our original fullRecipe object
  _.set(fullRecipe, 'fameEarned', totalFameEarned);
  _.set(fullRecipe, 'itemValue', totalItemValue);

  // Bad object manipulation NEEDS FIXING
  fullRecipe.enchantmentlevel && (fullRecipe.uniquename = `${fullRecipe.uniquename}${enchantment}`);
  fullRecipe.craftingrequirements.craftresource = _.castArray(
    fullRecipe.craftingrequirements.craftresource
  );

  // Return our New Recipe
  return fullRecipe;
};

// Calculating the artifact values
const calculateArtifact = (originalObj, enchantment) => {
  let newObj = originalObj;
  const [artifactElement] = _.pullAt(newObj.craftingrequirements.craftresource, [
    newObj.craftingrequirements.craftresource.length - 1
  ]);

  /* Because the artifact verbose names are in a separate file with a different file structure, we need to create an */
  artifactElement.verboseName = verboseArtifact(artifactElement.uniquename);
  // Calculate the generic fame/value for the item w/o the artifact
  newObj = calculateEquipment(newObj, enchantment);
  // Find the Artifact piece in our JSON DB
  const artifactData = Items[_.findIndex(Items, { uniquename: artifactElement.uniquename })];
  // Add on additional item value from the artifact piece
  newObj.itemValue += _.toNumber(artifactData.itemvalue);
  // Addition fame due to the item being an artifact piece it static
  newObj.fameEarned += 500;

  // If we took out the artifact element, we will put it back in here.
  newObj.craftingrequirements.craftresource.push(artifactElement);

  return newObj;
};

// 1.Our core function, this is where everthing starts
const ObjPrune = (obj, enchantment) => {
  // Remove unnecessary key/values
  const mutableObj = _.pick(obj, ['craftingrequirements', 'tier', 'uniquename']);
  // Add the verbose name
  mutableObj.verboseName = verboseName(mutableObj.uniquename);

  // Array destructuring of child objects
  const [enchantOne, enchantTwo, enchantThree] = obj.enchantments.enchantment;

  // We have hoisted a child object and overwritten its parent object that we aren't using.
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

  // Checking if the equipment is an artifact
  if (
    ['KEEPER', 'HELL', 'MORGANA', 'UNDEAD'].some(substring => obj.uniquename.includes(substring))
  ) {
    return calculateArtifact(mutableObj, enchantment);
  }
  return calculateEquipment(mutableObj, enchantment);
};

module.exports = ObjPrune;
