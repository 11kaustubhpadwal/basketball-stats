import React from "react";
import { Grid, Text, Card, Image, Link } from "@geist-ui/react";

const InfoCard = ({ imgUrl, linkUrl, text }) => {
  return (
    <Grid xs={24} md={12} lg={6}>
      <Link href={linkUrl}>
        <Card hoverable shadow>
          <Image src={imgUrl} style={{ objectFit: "cover" }} />
          <Text h4>{text}</Text>
        </Card>
      </Link>
    </Grid>
  );
};

export default InfoCard;
