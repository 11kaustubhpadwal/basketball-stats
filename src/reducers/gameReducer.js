import {
  GET_GAMES,
  GET_GAMES_FAILED,
  GET_GAMES_LOADING,
} from "../actions/types";

const initialState = {
  games: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES: {
      return {
        ...state,
        games: action.payload,
        error: null,
        loading: false,
      };
    }
    case GET_GAMES_FAILED: {
      return {
        ...state,
        games: [],
        error: action.payload,
        loading: false,
      };
    }
    case GET_GAMES_LOADING: {
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
