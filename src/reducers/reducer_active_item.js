import { ITEM_SELECTED } from "../actions/index";
export default function (state = [], actions) {
  switch (actions.type) {
    case ITEM_SELECTED:
      return actions.payload;
    default:
      return state;
  }
};