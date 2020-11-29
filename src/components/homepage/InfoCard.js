import React from "react";
import { Grid, Text, Card, Image } from "@geist-ui/react";

const InfoCard = ({ imgUrl, text }) => {
  return (
    <Grid xs={24} md={12} lg={6}>
      <Card hoverable shadow>
        <Image src={imgUrl} style={{ objectFit: "cover" }} />
        <Text h4>{text}</Text>
      </Card>
    </Grid>
  );
};

export default InfoCard;
