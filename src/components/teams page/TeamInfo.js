import React from "react";
import { Grid, Text, Card, Image } from "@geist-ui/react";

const TeamInfo = () => {
  return (
    <Grid xs={24} md={8} lg={6}>
      <Card hoverable shadow>
        <Image
          src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
          style={{ objectFit: "cover" }}
        />
        <Text h4 style={{ marginBottom: "0" }}>
          Team Name
        </Text>
        <Text type="secondary" small>
          Team Full Name
        </Text>
        <Card.Footer>
          <Text p type="success">
            Conference
          </Text>
          <Text p type="warning">
            Division
          </Text>
          <Text p type="error">
            Abbreviation
          </Text>
          <Text p>City</Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default TeamInfo;
