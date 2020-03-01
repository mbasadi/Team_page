import { combineReducers } from "redux";

import allReducers from './tempoReducers'
const rootReducer = combineReducers({
  appState: allReducers
});
export default rootReducer;