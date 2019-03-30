import { FETCH_USER } from "../actions/types";

// state defaults to null to show that user-login status is unknown
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // user model for logged in : false for logged out
    default:
      return state;
  }
}
