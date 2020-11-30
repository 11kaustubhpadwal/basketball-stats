import React from "react";
import { Grid, Text, Card } from "@geist-ui/react";

const GameInfo = () => {
  return (
    <Grid xs={24} md={8} lg={6}>
      <Card hoverable shadow>
        <Text h4 style={{ marginBottom: "0" }}>
          Season, Status
        </Text>
        <Text p>Team Name 1 vs Team Name 2</Text>
        <Text type="secondary" small>
          Team 1 Abbreviation vs Team 2 Abbreviation
        </Text>
        <Text p type="success">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/888/888596.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          Team 1 Score
        </Text>
        <Text p type="error">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/888/888596.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          Team 2 Score
        </Text>
        <Card.Footer>
          <Text p>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/492/492970.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            Date
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default GameInfo;
