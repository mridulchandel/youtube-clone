import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function Backdrop({ show, onDismiss }) {
  const classes = ["backdrop"];
  if (show) {
    classes.push("showBackdrop");
  }
  return <div className={classes.join(" ")} onClick={onDismiss}></div>;
}

Backdrop.propTypes = {};

export default Backdrop;
