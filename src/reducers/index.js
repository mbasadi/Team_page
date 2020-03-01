import { combineReducers } from "redux";

import allReducers from './teams_users_activeItem_reducer'
const rootReducer = combineReducers({
  appState: allReducers
});
export default rootReducer;