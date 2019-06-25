import axios from 'axios';

export const getItem = async itemId => {
  const { data } = await axios.get(`/api/item/${itemId}`);
  return data;
};
