import React from "react";
import { Grid, Text, Input, Button, Pagination } from "@geist-ui/react";
import PlayerInfo from "./PlayerInfo";

const Players = () => {
  return (
    <Grid.Container xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1899/1899248.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          All basketball players from major leagues
        </Text>
      </Grid>
      <Grid xs={24} md={24} lg={24} style={{ margin: "3% 1.5% 1.5%" }}>
        <Input clearable placeholder="e.g. lebron james" />
        <Button type="secondary" ghost style={{ marginLeft: "20px" }}>
          Search
        </Button>
      </Grid>
      {/* Row 1 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      {/* Row 2 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      {/* Row 3 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      {/* Row 4 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      {/* Row 5 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      {/* Row 6 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      {/* Row 7 */}
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <PlayerInfo />
      <Pagination count={20} initialPage={1} />
    </Grid.Container>
  );
};

export default Players;
