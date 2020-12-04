import {
  GET_PLAYERS,
  GET_PLAYERS_FAILED,
  GET_PLAYERS_LOADING,
  SEARCH_PLAYER,
  SEARCH_PLAYER_FAILED,
  SEARCH_PLAYER_LOADING,
  GET_PLAYER_STATS,
  GET_PLAYER_STATS_FAILED,
  GET_PLAYER_STATS_LOADING,
} from "../actions/types";

const initialState = {
  players: [],
  error: null,
  loading: false,
  stats: null,
  statsLoading: false,
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
    case GET_PLAYER_STATS: {
      return {
        ...state,
        stats: action.payload,
        error: null,
        loading: false,
        statsLoading: false,
      };
    }
    case GET_PLAYERS_FAILED:
    case SEARCH_PLAYER_FAILED:
    case GET_PLAYER_STATS_FAILED: {
      return {
        ...state,
        players: [],
        error: action.payload,
        loading: false,
        stats: null,
        statsLoading: false,
      };
    }
    case GET_PLAYERS_LOADING:
    case SEARCH_PLAYER_LOADING: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case GET_PLAYER_STATS_LOADING: {
      return {
        ...state,
        error: null,
        loading: false,
        statsLoading: true,
      };
    }
    default:
      return state;
  }
};
