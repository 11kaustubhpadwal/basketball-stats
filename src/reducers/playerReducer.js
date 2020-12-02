import {
  GET_PLAYERS,
  GET_PLAYERS_FAILED,
  GET_PLAYERS_LOADING,
  SEARCH_PLAYER,
  SEARCH_PLAYER_FAILED,
  SEARCH_PLAYER_LOADING,
} from "../actions/types";

const initialState = {
  players: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
    case SEARCH_PLAYER: {
      return {
        ...state,
        players: action.payload,
        error: null,
        loading: false,
      };
    }
    case GET_PLAYERS_FAILED:
    case SEARCH_PLAYER_FAILED: {
      return {
        ...state,
        players: [],
        error: action.payload,
        loading: false,
      };
    }
    case GET_PLAYERS_LOADING:
    case SEARCH_PLAYER_LOADING: {
      return {
        ...state,
        players: [],
        error: null,
        loading: true,
      };
    }
    default:
      return state;
  }
};
