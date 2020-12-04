import React, { useState } from "react";
import { Grid, Text, Card, Divider, Button } from "@geist-ui/react";
import PlayerStats from "./PlayerStats";

const PlayerInfo = ({ player, getPlayerStats, players }) => {
  const [state, setState] = useState(false);
  const handler = () => setState(true);

  const closeHandler = () => {
    setState(false);
  };

  return (
    <Grid xs={24} md={12} lg={6} style={{ padding: "3% 1.5%" }}>
      <Card hoverable shadow>
        <Card.Content>
          <Text b>{`${player.first_name} ${player.last_name}`}</Text>
        </Card.Content>
        <Divider y={0} />
        <Card.Content>
          <Text type="error">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/1461/1461348.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            {player.team.name}
          </Text>
          <Text>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3080/3080856.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            {player.team.abbreviation}
          </Text>
          <Text type="secondary">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/269/269947.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            {player.team.city}
          </Text>
        </Card.Content>
        <Card.Footer>
          <Button style={{ width: "100%" }} type="secondary" onClick={handler}>
            Show Stats
          </Button>
          {state && (
            <PlayerStats
              state={state}
              handler={handler}
              closeHandler={closeHandler}
              setState={setState}
              getPlayerStats={getPlayerStats}
              playerId={player.id}
              players={players}
            />
          )}
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PlayerInfo;
