import React, { useEffect } from "react";
import { Grid, Text } from "@geist-ui/react";
import TeamInfo from "./TeamInfo";
import Loading from "../shared/Loading";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTeams } from "../../actions/teamActions";

function Teams({ teams, getTeams }) {
  // Get all teams info
  useEffect(() => {
    getTeams();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid.Container xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1189/1189206.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          Major basketball teams
        </Text>
      </Grid>
      {!teams.loading && teams.error !== null && (
        <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
          <Text h3 type="error">
            {teams.error}
          </Text>
        </Grid>
      )}
      {teams.loading && (
        <Grid
          xs={24}
          md={24}
          lg={24}
          style={{ margin: "1.5% 1.5% 0", textAlign: "center" }}
        >
          <Loading />
        </Grid>
      )}
      {/* Row 1 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(0, 3).map((team) => <TeamInfo team={team} />)}
      {/* Row 2 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(4, 7).map((team) => <TeamInfo team={team} />)}
      {/* Row 3 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(8, 11).map((team) => <TeamInfo team={team} />)}
      {/* Row 4 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(12, 15).map((team) => <TeamInfo team={team} />)}
      {/* Row 5 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(16, 19).map((team) => <TeamInfo team={team} />)}
      {/* Row 6 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(20, 23).map((team) => <TeamInfo team={team} />)}
      {/* Row 7 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(24, 27).map((team) => <TeamInfo team={team} />)}
      {/* Row 8 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data.slice(28, 29).map((team) => <TeamInfo team={team} />)}
    </Grid.Container>
  );
}

Teams.propTypes = {
  teams: PropTypes.object.isRequired,
  getTeams: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teams: state.teams,
});

export default connect(mapStateToProps, { getTeams })(Teams);
