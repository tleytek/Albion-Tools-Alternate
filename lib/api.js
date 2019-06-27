import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

export const getItemPrice = async itemId => {
  const { data } = await axios.get(`/api/item/price/${itemId}`);
  // const time = await moment(data.buy_price_max_date).fromNow();
  if (data.length == 0) {
    return 'error';
  }
  return data;
};
