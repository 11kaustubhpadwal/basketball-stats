import axios from "axios";

import { GET_GAMES, GET_GAMES_FAILED, GET_GAMES_LOADING } from "./types";

// Get all games
export const getGames = (pageNumber) => {
  return async (dispatch) => {
    dispatch(gamesLoading());

    try {
      const response = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/games?page=${pageNumber}`,
      });

      dispatch({ type: GET_GAMES, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_GAMES_FAILED,
        payload:
          "Failed to get all players. Please refresh the page and try again.",
      });
    }
  };
};

// Loading to get games
export const gamesLoading = () => {
  return {
    type: GET_GAMES_LOADING,
  };
};
