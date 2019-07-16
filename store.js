import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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

export const actionTypes = {
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  SELECT_SUBCATEGORY: 'SELECT_SUBCATEGORY',
  SELECT_ITEMTYPE: 'SELECT_ITEMTYPE',
  SELECT_TIER: 'SELECT_TIER',
  SELECT_ENCHANTMENT: 'SELECT_ENCHANTMENT',
  SELECT_EQUIPMENTITEM: 'SELECT_EQUIPMENTITEM',
  SELECT_QUANTITY: 'SELECT_QUANTITY',
  SELECT_TAX: 'SELECT_TAX',
  SELECT_RETURNRATE: 'SELECT_RETURNRATE',
  SELECT_FOCUSRETURNRATE: 'SELECT_FOCUSRETURNRATE'
};

// REDUCERS
export const reducer = (state = INITIAL_STATE, action) => {
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

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
}
