import axios from "axios";

import { GET_PLAYERS, GET_PLAYERS_FAILED, GET_PLAYERS_LOADING } from "./types";

// Get all players
export const getPlayers = (pageNumber) => {
  return async (dispatch) => {
    dispatch(playersLoading());

    try {
      const response = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/players?page=${pageNumber}`,
      });

      dispatch({ type: GET_PLAYERS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_PLAYERS_FAILED,
        payload:
          "Failed to get all players. Please refresh the page and try again.",
      });
    }
  };
};

// Loading to get players
export const playersLoading = () => {
  return {
    type: GET_PLAYERS_LOADING,
  };
};
