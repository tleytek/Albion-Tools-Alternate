import axios from 'axios';

export default {
  getItemData: async itemId => {
    const { data } = await axios.get(`/api/item/data/${itemId}`);
    if (data.length === 0) {
      return 'error';
    }
    return data;
  },
  getPrice: async (itemId, city) => {
    const { data } = await axios.get(`/api/item/price/${itemId}/${city}`);
    if (data.length === 0) {
      return 'error';
    }
    return data;
  },
  getJournalPrice: async tier => {
    const { data } = await axios.get(`/api/journal/price/${tier}`);
    if (data.length === 0) {
      return 'error';
    }
    return data;
  }
};
