import axios from "axios";

import {
  GET_GAMES,
  GET_GAMES_FAILED,
  GET_GAMES_LOADING,
  SEARCH_GAME,
  SEARCH_GAME_FAILED,
  SEARCH_GAME_LOADING,
} from "./types";

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
          "Failed to get all games. Please refresh the page and try again.",
      });
    }
  };
};

// Search for a game
export const searchGame = (season) => {
  return async (dispatch) => {
    dispatch(searchGameLoading());

    try {
      const response = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/games?seasons[]=${season}`,
      });

      dispatch({ type: SEARCH_GAME, payload: response.data });
    } catch (error) {
      dispatch({
        type: SEARCH_GAME_FAILED,
        payload:
          "Failed to get all games. Please refresh the page and try again.",
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

// Loading to search a game
export const searchGameLoading = () => {
  return {
    type: SEARCH_GAME_LOADING,
  };
};
