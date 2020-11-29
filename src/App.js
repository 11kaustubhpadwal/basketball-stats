import { Grid, Text } from "@geist-ui/react";
import Logo from "./images/basketball-ball.svg";
import InfoCard from "./components/homepage/InfoCard";

const App = () => {
  return (
    <Grid.Container
      gap={2}
      style={{ padding: "10px 30px" }}
      alignItems="center"
    >
      <Grid xs={24} md={12} lg={2}>
        <img src={Logo} alt="Logo" style={{ width: "5rem" }} />
      </Grid>
      <Grid xs={24} md={12} lg={18}>
        <Text h1 i>
          Basketball Stats
        </Text>
      </Grid>
      <Grid xs={24} md={12} lg={2}>
        <Text h4>Home</Text>
      </Grid>
      <Grid xs={24} md={12} lg={2}>
        <Text h4>FAQ</Text>
      </Grid>
      <Grid xs={24} md={24} lg={24}>
        <Text h3 style={{ textAlign: "center" }}>
          Everything from player stats to iconic games . . .
        </Text>
      </Grid>
      <Grid.Container gap={4} style={{ padding: "40px 30px" }} justify="center">
        <InfoCard
          imgUrl="https://images4.alphacoders.com/782/782680.jpg"
          text="PLAYERS"
        />
        <InfoCard
          imgUrl="https://initiate.alphacoders.com/images/920/cropped-1920-1080-920833.jpg?7796"
          text="TEAMS"
        />
        <InfoCard
          imgUrl="https://images3.alphacoders.com/914/914671.png"
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
      <Grid xs={24} md={24} lg={24}>
        <Text p style={{ textAlign: "center" }}>
          Website version 1.0.0.0
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default App;
