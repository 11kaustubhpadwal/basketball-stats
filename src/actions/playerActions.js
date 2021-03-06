import axios from "axios";

import {
  GET_PLAYERS,
  GET_PLAYERS_FAILED,
  GET_PLAYERS_LOADING,
  GET_PLAYER_STATS,
  GET_PLAYER_STATS_FAILED,
  GET_PLAYER_STATS_LOADING,
  SEARCH_PLAYER,
  SEARCH_PLAYER_FAILED,
  SEARCH_PLAYER_LOADING,
} from "./types";

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

// Search for a player
export const searchPlayer = (userInput) => {
  return async (dispatch) => {
    dispatch(searchPlayerLoading());

    try {
      const response = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/players?search=${userInput}`,
      });

      dispatch({ type: SEARCH_PLAYER, payload: response.data });
    } catch (error) {
      dispatch({
        type: SEARCH_PLAYER_FAILED,
        payload:
          "Failed to get all players. Please refresh the page and try again.",
      });
    }
  };
};

// Players search pagination
export const playersSearchPagination = (pageNumber, userInput) => {
  return async (dispatch) => {
    dispatch(playersLoading());

    try {
      const response = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/players?search=${userInput}&page=${pageNumber}`,
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

// Get a player's stats for all seasons
export const getPlayerStats = (playerId) => {
  return async (dispatch) => {
    dispatch(getPlayerStatsLoading());

    try {
      const response1 = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}`,
      });

      const response2 = await axios({
        method: "get",
        url: `https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${playerId}`,
      });

      const response = { response1: response1.data, response2: response2.data };

      dispatch({ type: GET_PLAYER_STATS, payload: response });
    } catch (error) {
      dispatch({
        type: GET_PLAYER_STATS_FAILED,
        payload:
          "Failed to get the stats. Please refresh the page and try again.",
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

// Loading to search player
export const searchPlayerLoading = () => {
  return {
    type: SEARCH_PLAYER_LOADING,
  };
};

// Loading to get player stats
export const getPlayerStatsLoading = () => {
  return {
    type: GET_PLAYER_STATS_LOADING,
  };
};
