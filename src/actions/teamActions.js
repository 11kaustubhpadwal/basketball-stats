import axios from "axios";

import { GET_TEAMS, GET_TEAMS_FAILED, GET_TEAMS_LOADING } from "./types";

// Get all teams
export const getTeams = () => {
  return async (dispatch) => {
    dispatch(teamsLoading());

    try {
      const response = await axios({
        method: "get",
        url: "https://www.balldontlie.io/api/v1/teams",
      });

      dispatch({ type: GET_TEAMS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_TEAMS_FAILED,
        payload:
          "Failed to get all teams. Please refresh the page and try again.",
      });
    }
  };
};

// Loading to get teams
export const teamsLoading = () => {
  return {
    type: GET_TEAMS_LOADING,
  };
};
