import React from "react";
import { Grid, Text, Card, Divider } from "@geist-ui/react";

const PlayerInfo = () => {
  return (
    <Grid xs={24} md={12} lg={6}>
      <Card hoverable shadow>
        <Card.Content>
          <Text b>Player Name</Text>
        </Card.Content>
        <Divider y={0} />
        <Card.Content>
          <Text type="error">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/889/889273.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            Player position
          </Text>
          <Text type="success">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/1461/1461348.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            Player team
          </Text>
          <Text>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3080/3080856.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            Team Abbreviation
          </Text>
          <Text type="secondary">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/269/269947.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            Team City
          </Text>
        </Card.Content>
      </Card>
    </Grid>
  );
};

export default PlayerInfo;
