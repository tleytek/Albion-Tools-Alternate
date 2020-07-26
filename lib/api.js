import axios from 'axios';

export const getItemData = async itemId => {
  const { data } = await axios.get(`/api/item/data/${itemId}`);
  return data;
};

// 
export const getPrice = async (itemId, city, auctionType) => {
  let itemArr = '';

  if (Array.isArray(itemId)) {
    const newItemArr = itemId.map(element => `itemArr[]=${element}`);
    itemArr = newItemArr.join('&');
  } else {
    itemArr = `itemArr[]=${itemId}`;
  }

  const { data } = await axios.get(`/api/item/price/${city}/${auctionType}?${itemArr}`);
  return data;
};

// For getting journal prices
export const getResourceTierPrices = async tier => {
  const { data } = await axios.get(`/api/resource/price/${tier}`);
  return data;
};
