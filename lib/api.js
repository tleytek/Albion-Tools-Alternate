import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

export const getItemPrice = async itemId => {
  const { data } = await axios.get(`/api/item/price/${itemId}`);
  // const time = await moment(data.buy_price_max_date).fromNow();
  if (data.length === 0) {
    return 'error';
  }
  return data;
};

export const blackMarket = async (tier, itemType, enchantment) => {
  const { data } = await axios.get(`/api/blackmarket/${tier}/${itemType}/${enchantment}`);
  return data;
};

export const getItemData = async itemId => {
  const itemData = await axios.get(`/api/item/data/equip/${itemId}`);

  /* This technique feels really hacky but to reduce the amount of times I would need to
  write the correct crafting requirements for every piece of gear, this was the fastest way
  I could think of. */
  await itemData.data[0].craftingRequirements.map((resource, index) => {
    axios.get(`/api/item/data/recipe/${resource.uniqueName}`).then(resourceData => {
      Object.assign(itemData.data[0].craftingRequirements[index], resourceData.data[0]);
    });
  });
  return itemData;
};
