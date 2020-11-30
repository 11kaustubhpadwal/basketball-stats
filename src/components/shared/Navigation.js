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
      <Grid xs={24} md={12} lg={2}>
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
