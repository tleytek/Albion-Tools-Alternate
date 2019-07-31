import actionTypes from '../actions/types';

const INITIAL_STATE = {
  category: null,
  subCategory: null,
  itemType: null,
  tier: 'T4',
  enchantment: '',
  equipmentItem: null,
  tax: 59,
  returnRate: 15,
  focusReturnRate: 44,
  quantity: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return Object.assign({}, state, {
        category: action.category,
        subCategory: null,
        itemType: null,
        equipmentItem: null
      });
    case actionTypes.SELECT_SUBCATEGORY:
      return Object.assign({}, state, {
        subCategory: action.subCategory,
        itemType: null,
        equipmentItem: null
      });
    case actionTypes.SELECT_ITEMTYPE:
      return Object.assign({}, state, {
        itemType: action.itemType
      });
    default:
      return state;
  }
};
