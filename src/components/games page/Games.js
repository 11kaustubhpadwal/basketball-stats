import React from "react";
import { Grid, Text, Input, Button, Pagination } from "@geist-ui/react";
import GameInfo from "./GameInfo";

const Games = () => {
  return (
    <Grid xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/140/140493.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          Most famous and iconic games of all time
        </Text>
      </Grid>
      <Grid xs={24} md={24} lg={24}>
        <Input clearable placeholder="e.g. lakers" />
        <Button type="secondary" ghost style={{ marginLeft: "20px" }}>
          Search
        </Button>
      </Grid>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 0" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 0" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 0" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 0" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 0" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 0" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Grid.Container
        xs={24}
        md={24}
        lg={24}
        gap="4"
        style={{ padding: "3% 2% 4%" }}
      >
        <GameInfo />
        <GameInfo />
        <GameInfo />
        <GameInfo />
      </Grid.Container>
      <Pagination count={20} initialPage={1} />
    </Grid>
  );
};

export default Games;
