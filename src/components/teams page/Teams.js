import React from "react";
import { Grid, Text } from "@geist-ui/react";
import TeamInfo from "./TeamInfo";

function Teams() {
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
      {/* Row 1 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 2 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 3 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 4 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 5 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 6 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 7 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      {/* Row 8 */}
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
      <TeamInfo />
    </Grid.Container>
  );
}

export default Teams;
