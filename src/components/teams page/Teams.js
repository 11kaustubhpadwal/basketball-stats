import React from "react";
import { Grid, Text } from "@geist-ui/react";
import TeamInfo from "./TeamInfo";

function Teams() {
  return (
    <Grid xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1189/1189206.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          Major basketball teams
        </Text>
      </Grid>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
      <Grid.Container xs={24} md={24} lg={24} gap="4" style={{ padding: "2%" }}>
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
        <TeamInfo />
      </Grid.Container>
    </Grid>
  );
}

export default Teams;
