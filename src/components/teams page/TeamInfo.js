import React from "react";
import { Grid, Text, Card, Divider } from "@geist-ui/react";
import PropTypes from "prop-types";
import { logos } from "../../utils/teamLogos";

const TeamInfo = ({ team }) => {
  const getLogo = () => {
    for (let i = 0; i < logos.length; i++) {
      if (
        logos[i]
          .slice(68, 90)
          .replace(/_/g, " ")
          .includes(team.name.toLowerCase())
      ) {
        return logos[i];
      }
    }
  };

  return (
    <Grid xs={24} md={12} lg={6} style={{ padding: "3% 1.5%" }}>
      <Card hoverable shadow>
        <div style={{ height: "300px" }}>
          <img
            src={getLogo()}
            alt="Logo"
            style={{
              padding: "30px",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          ></img>
        </div>
        <Text h4 style={{ marginBottom: "0" }}>
          {team.name}
        </Text>
        <Text type="secondary">{team.full_name}</Text>
        <Divider />
        <Text p type="success">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3815/3815707.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          {team.conference}
        </Text>
        <Text p type="warning">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1738/1738435.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          {team.division}
        </Text>
        <Text p type="error">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3080/3080856.svg"
            style={{ width: "25px", marginRight: "10px" }}
            alt="icon"
          />
          {team.abbreviation}
        </Text>
        <Card.Footer>
          <Text p>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/269/269947.svg"
              style={{ width: "25px", marginRight: "10px" }}
              alt="icon"
            />
            {team.city}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

TeamInfo.propTypes = {
  team: PropTypes.object.isRequired,
};

export default TeamInfo;
