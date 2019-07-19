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
    // const time = await moment(data.buy_price_max_date).fromNow();
    if (data.length === 0) {
      return 'error';
    } 
      return data;
    
  }
};
