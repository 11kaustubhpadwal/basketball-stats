import React, { Fragment } from "react";
import { Grid, Text, Link } from "@geist-ui/react";
import Logo from "../../images/basketball-ball.svg";

const Navigation = () => {
  return (
    <Fragment>
      <Grid xs={4} md={2} lg={2} style={{ textAlign: "right" }}>
        <img src={Logo} alt="Logo" style={{ width: "5rem" }} />
      </Grid>
      <Grid xs={20} md={15} lg={16}>
        <Text h1 i>
          Basketball Stats
        </Text>
      </Grid>
      <Grid md={4} lg={3} style={{ textAlign: "right" }}>
        <Link href="/">
          <Text h4>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/201/201128.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            Home
          </Text>
        </Link>
      </Grid>
      <Grid xs={24} md={3} lg={3}>
        <Link href="faq">
          <Text h4>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/942/942802.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            FAQ
          </Text>
        </Link>
      </Grid>
    </Fragment>
  );
};

export default Navigation;
