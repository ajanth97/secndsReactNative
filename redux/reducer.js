import { combineReducers } from "redux";
import { UPDATE_LISTING } from "./actions";
import { UPDATE_LOGIN } from "./actions";
import { LISTING_POST_SUCCESS, LISTING_POST_REJECTED } from "./actions";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

//listingReducer
const listingReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_LISTING:
      return [...state, action.payload];
    case LISTING_POST_SUCCESS:
      return { token: "faketoken" };

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
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default reducer;
