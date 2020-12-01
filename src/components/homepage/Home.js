import React, { Fragment } from "react";
import { Grid, Text } from "@geist-ui/react";
import InfoCard from "./InfoCard";

const Home = () => {
  return (
    <Fragment>
      <Grid xs={24} md={24} lg={24}>
        <Text h3 style={{ textAlign: "center" }}>
          Everything from player stats to iconic games . . .
        </Text>
      </Grid>
      <Grid.Container gap={4} style={{ padding: "40px 30px" }} justify="center">
        <InfoCard
          imgUrl="https://images.pexels.com/photos/5586480/pexels-photo-5586480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          linkUrl="/players"
          text="PLAYERS"
        />
        <InfoCard
          imgUrl="https://images.pexels.com/photos/2820900/pexels-photo-2820900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          linkUrl="/teams"
          text="TEAMS"
        />
        <InfoCard
          imgUrl="https://images.pexels.com/photos/3019018/pexels-photo-3019018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          linkUrl="/games"
          text="GAMES"
        />
      </Grid.Container>
      <Grid xs={24} md={24} lg={24}>
        <Text h3 style={{ textAlign: "center" }}>
          Here you will find all the latest statistics for all the major
          basketball teams and their players.
        </Text>
        <Text h3 style={{ textAlign: "center" }}>
          This data is updated every 10 minutes!
        </Text>
        <Text h3 style={{ textAlign: "center" }}>
          You will always get the latest and the most accurate information.
        </Text>
      </Grid>
    </Fragment>
  );
};

export default Home;
