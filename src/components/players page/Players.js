import React from "react";
import { Grid, Text, Input, Button, Pagination } from "@geist-ui/react";
import PlayerInfo from "./PlayerInfo";

const Players = () => {
  return (
    <Grid xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1899/1899248.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          All basketball players from major leagues
        </Text>
      </Grid>
      <Grid xs={24} md={24} lg={24}>
        <Input clearable placeholder="e.g. lebron james" />
        <Button type="secondary" ghost style={{ marginLeft: "20px" }}>
          Search
        </Button>
      </Grid>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "4% 2%" }}
      >
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
      </Grid.Container>
      <Pagination count={20} initialPage={1} />
    </Grid>
  );
};

export default Players;
