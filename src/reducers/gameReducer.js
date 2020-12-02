import {
  GET_GAMES,
  GET_GAMES_FAILED,
  GET_GAMES_LOADING,
  SEARCH_GAME,
  SEARCH_GAME_FAILED,
  SEARCH_GAME_LOADING,
} from "../actions/types";

const initialState = {
  games: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
    case SEARCH_GAME: {
      return {
        ...state,
        games: action.payload,
        error: null,
        loading: false,
      };
    }
    case GET_GAMES_FAILED:
    case SEARCH_GAME_FAILED: {
      return {
        ...state,
        games: [],
        error: action.payload,
        loading: false,
      };
    }
    case GET_GAMES_LOADING:
    case SEARCH_GAME_LOADING: {
      return {
        ...state,
        games: [],
        error: null,
        loading: true,
      };
    }
    default:
      return state;
  }
};
