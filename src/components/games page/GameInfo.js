import React from "react";
import { Grid, Text, Card } from "@geist-ui/react";
import moment from "moment";

const GameInfo = ({ game }) => {
  return (
    <Grid xs={24} md={12} lg={6} style={{ padding: "3% 1.5%" }}>
      <Card hoverable shadow>
        <Text h4 style={{ marginBottom: "0" }}>
          {game.season}, {game.status}
        </Text>
        <Text p>{`${game.home_team.name} vs ${game.visitor_team.name}`}</Text>
        <Text type="secondary" small>
          {`${game.home_team.abbreviation} vs ${game.visitor_team.abbreviation}`}
        </Text>
        <Text p type="success">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/888/888596.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          {`${game.home_team.name} score - ${game.home_team_score}`}
        </Text>
        <Text p type="error">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/888/888596.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          {`${game.visitor_team.name} score - ${game.visitor_team_score}`}
        </Text>
        <Card.Footer>
          <Text p>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/492/492970.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            {moment(game.date).format("dddd, MMMM Do YYYY")}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default GameInfo;
