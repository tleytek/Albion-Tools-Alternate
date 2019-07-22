import axios from 'axios';

export const getItemData = async itemId => {
  const { data } = await axios.get(`/api/item/data/${itemId}`);
  if (data.length === 0) {
    return 'error';
  }
  return data;
};
export const getPrice = async (itemId, city) => {
  const { data } = await axios.get(`/api/item/price/${itemId}/${city}`);
  if (data.length === 0) {
    return 'error';
  }
  return data;
};
export const getJournalPrice = async tier => {
  const { data } = await axios.get(`/api/journal/price/${tier}`);
  if (data.length === 0) {
    return 'error';
  }
  return data;
};
