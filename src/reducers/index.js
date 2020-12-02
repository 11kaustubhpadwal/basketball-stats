import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import playerReducer from "./playerReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  teams: teamReducer,
  players: playerReducer,
  games: gameReducer,
});
