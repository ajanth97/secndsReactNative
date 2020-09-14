import { combineReducers } from "redux";
import { UPDATE_LISTING } from "./actions";
import { UPDATE_LOGIN } from "./actions";

//listingReducer
const listingReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_LISTING:
      return [...state, action.payload];
    default:
      return state;
  }
};

//loginReducer
const loginReducer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

//Main Reducer
const reducer = combineReducers({
  listing: listingReducer,
  login: loginReducer,
});

export default reducer;
