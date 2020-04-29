import { ActionTypes } from './action-types';

export const fetchSearchList = (data) => {
  return { type: ActionTypes.FETCH_LIST_REQUEST, payload: data };
};

export const fetchMoreList = (data) => {
  return { type: ActionTypes.FETCH_MORE_REQUEST, payload: data };
};

export const updateCartCounter = (data) => {
  return { type: ActionTypes.UPDATE_CART_COUNTER, payload: data };
};
