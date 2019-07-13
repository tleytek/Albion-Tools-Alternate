import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

export default {
  getPrice: async (itemId, city) => {
    const { data } = await axios.get(`/api/item/price/${itemId}/${city}`);
    // const time = await moment(data.buy_price_max_date).fromNow();
    if (data.length === 0) {
      return 'error';
    }
    return data;
  },
  seedItem: async itemObj => {
    await axios.post(`/api/blackmarket/seed`, itemObj);
    return console.log(`${itemObj.uniquename} Complete`);
  }
};
