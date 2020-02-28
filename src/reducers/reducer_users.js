import { FETCH_USERS } from "../actions/index";
export default function (state = [], actions) {
  switch (actions.type) {
    case FETCH_USERS:
      return actions.payload;
    default:
      return state;
  }
};