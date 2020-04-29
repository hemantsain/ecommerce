import { ActionTypes } from '../action-types';

const initialState = {
  isLoading: false,
  listData: [],
  cartCounter: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        listData: [],
      };
    case ActionTypes.FETCH_MORE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listData: [...state.listData, ...action.result],
      };
    case ActionTypes.UPDATE_CART_COUNTER:
      let tempArray = [];
      if (state.cartCounter.length === 0) {
        tempArray = state.cartCounter.concat(action.payload);
      } else {
        state.cartCounter.map((data) => {
          if (data.item.sku === action.payload.item.sku) {
            let obj = {
              ...data,
              number: action.payload.number,
            };
            tempArray = tempArray.concat(obj);
          } else {
            tempArray = tempArray.concat(data);
          }
        });
        let isExists = tempArray.some(
          (arr) => arr.item.sku === action.payload.item.sku,
        );
        if (!isExists) {
          tempArray = state.cartCounter.concat(action.payload);
        }
      }
      return {
        ...state,
        cartCounter: tempArray,
        // state.cartCounter.length === 0
        //   ? [...state.cartCounter, action.payload]
        //   : state.cartCounter.map((data) => {
        //       if (data.item.sku === action.payload.item.sku) {
        //         return {
        //           ...data,
        //           number: action.payload.number,
        //         };
        //       }
        //     }),
      };
    default:
      return state;
  }
}
export default appReducer;
