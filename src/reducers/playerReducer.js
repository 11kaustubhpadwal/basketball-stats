import {
  GET_PLAYERS,
  GET_PLAYERS_FAILED,
  GET_PLAYERS_LOADING,
} from "../actions/types";

const initialState = {
  players: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS: {
      return {
        ...state,
        players: action.payload,
        error: null,
        loading: false,
      };
    }
    case GET_PLAYERS_FAILED: {
      return {
        ...state,
        players: [],
        error: action.payload,
        loading: false,
      };
    }
    case GET_PLAYERS_LOADING: {
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
