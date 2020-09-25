import firebase from "firebase";

//action types
export const UPDATE_LISTING = "UPDATE_LISTING";
export const UPDATE_LOGIN = "UPDATE_LOGIN";
export const LISTING_POST_SENT = "LISTING_POST_SENT";
export const LISTING_POST_SUCCESS = "LISTING_POST_SUCCESS";
export const LISTING_POST_REJECTED = "LISTING_POST_REJECTED";

//async action creator
export const postListing = ({ data }) => (dispatch) => {
  dispatch({ type: LISTING_POST_SENT });
  firebase
    .firestore()
    .collection("listings")
    .add({
      title: "BBC",
    })
    .then(() => {
      console.log("Listing posted Successfully");
      dispatch({ type: LISTING_POST_SUCCESS });
    })
    .catch((err) => {
      console.log("Listing post failed");
      dispatch({ type: LISTING_POST_REJECTED });
    });
};

//action creators
export const updateLogin = (update) => ({
  type: UPDATE_LOGIN,
  payload: update,
});

export const updateListing = (update) => ({
  type: UPDATE_LISTING,
  payload: update,
});
