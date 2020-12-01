import React, { Fragment } from "react";
import loader from "../../images/preloader.gif";

const Loading = () => {
  return (
    <Fragment>
      <img src={loader} alt="Loading ..." style={{ width: "7%" }}></img>
    </Fragment>
  );
};

export default Loading;
