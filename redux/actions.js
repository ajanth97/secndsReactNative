//action types
export const UPDATE_LISTING = "UPDATE_LISTING";
export const UPDATE_LOGIN = "UPDATE_LOGIN";

//action creators
export const updateLogin = (update) => ({
  type: UPDATE_LOGIN,
  payload: update,
});

export const updateListing = (update) => ({
  type: UPDATE_LISTING,
  payload: update,
});
