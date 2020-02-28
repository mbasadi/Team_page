import { FETCH_TEAMS } from "../actions/index";
export default function (state = [], actions) {
  switch (actions.type) {
    case FETCH_TEAMS:
      return actions.payload;
    default:
      return state;
  }
};