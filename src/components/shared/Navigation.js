import React, { Fragment } from "react";
import { Grid, Text, Link } from "@geist-ui/react";
import Logo from "../../images/basketball-ball.svg";

const Navigation = () => {
  return (
    <Fragment>
      <Grid xs={24} md={12} lg={2}>
        <img src={Logo} alt="Logo" style={{ width: "5rem" }} />
      </Grid>
      <Grid xs={24} md={12} lg={18}>
        <Text h1 i>
          Basketball Stats
        </Text>
      </Grid>
      <Grid xs={24} md={12} lg={2}>
        <Link href="/">
          <Text h4>Home</Text>
        </Link>
      </Grid>
      <Grid xs={24} md={12} lg={2}>
        <Link href="faq">
          <Text h4>FAQ</Text>
        </Link>
      </Grid>
    </Fragment>
  );
};

export default Navigation;
