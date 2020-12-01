import {
  GET_TEAMS,
  GET_TEAMS_FAILED,
  GET_TEAMS_LOADING,
} from "../actions/types";

const initialState = {
  teams: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS: {
      return {
        ...state,
        teams: action.payload,
        error: null,
        loading: false,
      };
    }
    case GET_TEAMS_FAILED: {
      return {
        ...state,
        teams: [],
        error: action.payload,
        loading: false,
      };
    }
    case GET_TEAMS_LOADING: {
      return {
        ...state,
        teams: [],
        error: null,
        loading: true,
      };
    }
    default:
      return state;
  }
};
