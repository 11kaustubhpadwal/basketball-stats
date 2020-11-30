import React from "react";
import { Grid, Text, Input, Button, Pagination } from "@geist-ui/react";
import GameInfo from "./GameInfo";

const Games = () => {
  return (
    <Grid.Container xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/140/140493.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          Most famous and iconic games of all time
        </Text>
      </Grid>
      <Grid xs={24} md={24} lg={24} style={{ margin: "3% 1.5% 1.5%" }}>
        <Input clearable placeholder="e.g. lakers" />
        <Button type="secondary" ghost style={{ marginLeft: "20px" }}>
          Search
        </Button>
      </Grid>
      {/* Row 1 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      {/* Row 2 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      {/* Row 3 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      {/* Row 4 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      {/* Row 5 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      {/* Row 6 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      {/* Row 7 */}
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <GameInfo />
      <Pagination count={20} initialPage={1} />
    </Grid.Container>
  );
};

export default Games;
