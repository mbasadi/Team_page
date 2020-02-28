import { combineReducers } from "redux";
import TeamsReducer from "./reducer_teams";
import UsersReducer from "./reducer_users";
import ActiveItem from "./reducer_active_item";
const rootReducer = combineReducers({
  teams: TeamsReducer,
  activeItem: ActiveItem,
  users: UsersReducer,
});
export default rootReducer;