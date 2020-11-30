import React from "react";
import { Grid, Text, Card, Image, Divider } from "@geist-ui/react";

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
        <Text type="secondary">Team Full Name</Text>
        <Divider />
        <Text p type="success">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3815/3815707.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          Conference
        </Text>
        <Text p type="warning">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1738/1738435.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          Division
        </Text>
        <Text p type="error">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3080/3080856.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          Abbreviation
        </Text>
        <Card.Footer>
          <Text p>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/269/269947.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            City
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default TeamInfo;
