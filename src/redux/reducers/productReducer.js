import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};
export const fetchProductsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const fetchProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
