import React from "react";
import { Grid, Text, Collapse } from "@geist-ui/react";

const FAQ = () => {
  return (
    <Grid xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24} alignItems="center">
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1479/1479648.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          Frequently asked questions
        </Text>
      </Grid>
      <Grid xs={24} md={24} lg={24}>
        <Collapse title="Where do the stats come from?" shadow>
          <Text>
            The stats come from an open source REST API owned by balldontlie.io
          </Text>
        </Collapse>
        <Collapse title="Is this data legit?" shadow>
          <Text>
            The data is legit and is maintained by an open source community of
            developers.
          </Text>
        </Collapse>
        <Collapse title="How frequently is the data updated?" shadow>
          <Text>
            The data is updated every 10 minutes to ensure the most latest and
            accurate information is provided to the users.
          </Text>
        </Collapse>
        <Collapse title="What is the purpose of this project?" shadow>
          <Text>
            The purpose of this project is to provide a condensed version of the
            NBA stats website to all basketball fans around the world.
          </Text>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default FAQ;
