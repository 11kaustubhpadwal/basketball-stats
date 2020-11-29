import React from "react";
import { Grid, Text, Card, Divider } from "@geist-ui/react";

const PlayerInfo = () => {
  return (
    <Grid xs={24} md={8} lg={6}>
      <Card hoverable shadow>
        <Card.Content>
          <Text b>Player Name</Text>
        </Card.Content>
        <Divider y={0} />
        <Card.Content>
          <Text type="error">Player position</Text>
          <Text type="success">Player team</Text>
          <Text>Team Abbreviation</Text>
          <Text>Team City</Text>
        </Card.Content>
      </Card>
    </Grid>
  );
};

export default PlayerInfo;
