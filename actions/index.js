import actionTypes from './types';
// ACTIONS
export const selectCategory = category => {
  return { type: actionTypes.CATEGORY, category };
};
export const selectSubCategory = subCategory => {
  return { type: actionTypes.SUBCATEGORY, subCategory };
};

export const selectItemType = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

export default combineReducers({
  categories: categoriesReducer
});
