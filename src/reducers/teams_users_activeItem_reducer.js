// This reducer actually contains all parameters of app state and this parameters will change
// based on the actions which dispatched

import {
  FETCH_TEAMS,
  ITEM_SELECTED,
  FETCH_USERS
} from '../actions/types';

const Initial_State = {
  users: [],
  teams: [],
  activeItem: []
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, teams: action.payload.teams };
    case ITEM_SELECTED:
      return { ...state, activeItem: action.payload.slecteditem };
    case FETCH_USERS:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}

