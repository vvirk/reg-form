import * as type from '../actions/actionTypes';

export const initialState = {
  countries: false,
  successPopUp: false,
  isFetching: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_COUNTRIES:
      return { ...state, countries: action.countries };
    case type.TOGGLE_POP_UP:
      return { ...state, successPopUp: action.popUp};
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
