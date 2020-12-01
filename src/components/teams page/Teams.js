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
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/645/645881.svg"
              style={{ width: "30px", marginRight: "10px" }}
              alt="icon"
            />
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
        teams.teams.data
          .slice(0, 4)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 2 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(4, 8)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 3 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(8, 12)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 4 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(12, 16)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 5 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(16, 20)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 6 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(20, 24)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 7 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(24, 28)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
      {/* Row 8 */}
      {teams.teams.data !== undefined &&
        teams.teams.data.length > 0 &&
        teams.teams.data
          .slice(28, 30)
          .map((team, index) => <TeamInfo team={team} key={index} />)}
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
